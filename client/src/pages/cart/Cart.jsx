import React, { useContext, useEffect, useState } from "react";
import Banner from "../../components/shared/banner/Banner";
import { AuthContext } from "../../context/AuthProvider";
import CartItem from "../../components/cartItem/CartItem";
import { MdShoppingCartCheckout } from "react-icons/md";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:4000/carts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div>
      <Banner
        bannerText="Cart"
        bannerImage="https://images.pexels.com/photos/533301/pexels-photo-533301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
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
              <p className="text-xl font-bold font-mono text-slate-600">$450</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold font-mono text-slate-500">
                Discount
              </p>
              <p className="text-xl font-bold font-mono text-slate-600">$450</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold font-mono text-slate-500">Tax</p>
              <p className="text-xl font-bold font-mono text-slate-600">$450</p>
            </div>
            <div className="flex justify-between mb-4 border-b-2 border-blue-400">
              <p className="text-lg font-bold font-mono text-slate-500">
                Delivery Charge
              </p>
              <p className="text-xl font-bold font-mono text-slate-600">$450</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-bold font-mono text-blue-500">
                Estimated Total
              </p>
              <p className="text-xl font-bold font-mono text-blue-500">$450</p>
            </div>
            <div className="flex items-center gap-1 bg-yellow-400 w-fit text-xl font-bold font-mono px-8 py-2 rounded-sm hover:bg-yellow-500 cursor-pointer ">
              <MdShoppingCartCheckout />
              <span>Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
