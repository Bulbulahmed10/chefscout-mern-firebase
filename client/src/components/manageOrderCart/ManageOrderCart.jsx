import React, { useEffect, useState } from "react";
import {toast} from 'react-hot-toast'
import toastConfig from "../../utils/toastConfig";
const ManageOrderCart = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    fetch("http://localhost:4000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const selectHandler = (e, orderId) => {
    e.preventDefault();
    e.stopPropagation();
    const value = e.target.value;
    setSelectedOption(value);

    const orderStatusInfo = {
      orderId,
      status: value,
    };

    fetch("http://localhost:4000/order", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderStatusInfo),
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        toast.success("Order status updated", toastConfig)
      }
    })
  };

  return (
    <div className="m-4">
      {orders.length > 0 &&
        orders.map((singleOrderHistory) => {
          const { orderId, status, email } = singleOrderHistory;
          return (
            <div
              key={singleOrderHistory._id}
              tabIndex={0}
              className="collapse  border border-base-300 bg-base-100 rounded-box w-fit px-4 mb-3">
              <div className="collapse-title text-lg font-medium flex gap-14">
                <div>
                  <span className="uppercase font-mono font-medium">
                    Order Id :
                  </span>
                  <span className="font-mono text-xl ml-3 text-blue-500">
                    {orderId}
                  </span>
                </div>
                <div>
                  <span className="uppercase font-mono font-medium">
                    Email :
                  </span>
                  <span className="font-mono text-xl ml-3 text-blue-500">
                    {email}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="uppercase font-mono font-medium">
                    Status :
                  </span>
                  <select
                    onChange={(e) => selectHandler(e, orderId)}
                    className="select select-bordered select-sm w-fit max-w-xs capitalize ">
                    <option disabled selected className="text-lg capitalize">
                      {status}
                    </option>
                    <option
                      value="processing"
                      className="text-lg capitalize cursor-pointer">
                      Processing
                    </option>
                    <option
                      value="confirm"
                      className="text-lg capitalize cursor-pointer">
                      Confirm
                    </option>
                    <option
                      value="complete"
                      className="text-lg capitalize cursor-pointer">
                      Complete
                    </option>
                  </select>
                </div>
              </div>
              <div className="collapse-content">
                <div className="overflow-x-auto w-full">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    {singleOrderHistory.cartInfo.length > 0 &&
                      singleOrderHistory.cartInfo.map(
                        (singleCartInfo, index) => {
                          return (
                            <tbody key={singleCartInfo._id}>
                              <tr>
                                <th>
                                  <span> {index + 1} </span>
                                </th>
                                <td>
                                  <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                      <div className="mask mask-squircle w-14 h-14">
                                        <img
                                          src={singleCartInfo.image}
                                          alt={singleCartInfo.recipeName}
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold">
                                        {singleCartInfo.recipeName}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <th> ${singleCartInfo.price} </th>
                                <td className="text-xl font-bold font-mono ">
                                  {singleCartInfo.quantity}
                                </td>
                                <th>
                                  $
                                  {singleCartInfo.price *
                                    singleCartInfo.quantity}
                                </th>
                              </tr>
                            </tbody>
                          );
                        }
                      )}
                  </table>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ManageOrderCart;
