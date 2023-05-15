import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import CartItem from "../../components/cartItem/CartItem";
import { MdShoppingCartCheckout } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import OrderHistory from "../../components/orderHistory/OrderHistory";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const { user } = useContext(AuthContext);
  const [isCheckoutClick, setIsCheckoutClick] = useState(false);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:4000/carts?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "chefscout-access-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          let totalPrice = 0;
          data.length > 0 &&
            data.map(
              (singleItem) =>
                (totalPrice += singleItem.price * singleItem.quantity)
            );
          setTotalCost(totalPrice);
          setCarts(data);
        } else {
          navigate("/");
        }
      });
  }, []);
  const tax = (totalCost * 10) / 100;
  const deliveryCharge = (totalCost * 10) / 100;
  const estimateTotalCost = totalCost + tax + deliveryCharge;
  const handleCheckout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm the order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsCheckoutClick(true);
        const orderInfo = {
          orderId: uuidv4(),
          email: user.email,
          status: "processing",
          cartInfo: carts,
        };
        fetch("http://localhost:4000/order", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(orderInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              fetch(`http://localhost:4000/carts?email=${user?.email}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.deletedCount > 0) {
                    Swal.fire(
                      "Order Confirmed!",
                      "Thanks for stay with us.",
                      "success"
                    );
                    setCarts([]);
                  }
                })
                .catch((err) => console.error(err));
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <Banner
        bannerText="Cart"
        bannerImage="https://images.unsplash.com/photo-1519077336050-4ca5cac9d64f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      {carts.length > 0 ? (
        <div className="flex mx-4 my-10 gap-8">
          <div className="overflow-x-auto w-[65%]">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Quantity Action</th>
                  <th>Total Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {carts.length > 0 &&
                carts.map((singleCart, index) => (
                  <CartItem
                    key={singleCart.recipeId}
                    singleCart={singleCart}
                    index={index}
                  />
                ))}
            </table>
          </div>
          <div className="w-[30%]">
            <form>
              <label
                className="block uppercase font-Raleway text-sm text-slate-400 font-bold"
                htmlFor="promoCode">
                enter promo code
              </label>
              <input
                className="py-1 ps-2 border-2 outline-none text-xl font-mono font-semibold "
                type="text"
                name="promoCode"
                id=""
                required
              />
              <button className="bg-black text-white text-lg px-4 py-[5px] ml-2 font-mono uppercase tracking-wider rounded-sm ">
                Submit
              </button>
            </form>
            <div className="mt-8 w-[80%] ">
              <div className="flex justify-between mb-4">
                <p className="text-lg font-bold font-mono text-slate-500">
                  Total Cost
                </p>
                <p className="text-xl font-bold font-mono text-slate-600">
                  ${totalCost}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-bold font-mono text-slate-500">
                  Discount
                </p>
                <p className="text-xl font-bold font-mono text-slate-600">$0</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-bold font-mono text-slate-500">
                  Tax
                </p>
                <p className="text-xl font-bold font-mono text-slate-600">
                  ${tax.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mb-4 border-b-2 border-blue-400">
                <p className="text-lg font-bold font-mono text-slate-500">
                  Delivery Charge
                </p>
                <p className="text-xl font-bold font-mono text-slate-600">
                  ${deliveryCharge.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-bold font-mono text-blue-500">
                  Estimated Total
                </p>
                <p className="text-xl font-bold font-mono text-blue-500">
                  ${estimateTotalCost.toFixed(2)}
                </p>
              </div>
              {!isCheckoutClick && (
                <>
                  <div
                    onClick={handleCheckout}
                    className="btn flex items-center gap-1 bg-yellow-400 w-fit text-xl font-bold font-mono px-8 py-2 rounded-sm hover:bg-yellow-500 cursor-pointer ">
                    <MdShoppingCartCheckout className="text-black" />
                    <span className="text-black">Checkout</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center py-10 bg-slate-200">
            <h4 className="font-mono text-4xl font-bold text-blue-500 ">
              Your Cart is empty
            </h4>
            <Link
              to="/shop"
              className="bg-red-600 py-2 px-4 text-xl font-mono font-bold tracking-wider text-white rounded-md mt-5 hover:bg-red-500">
              Buy Recipe
            </Link>
          </div>
        </div>
      )}
      <OrderHistory />
    </div>
  );
};

export default Cart;
