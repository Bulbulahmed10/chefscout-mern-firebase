import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const OrderHistory = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div className="m-8">
      <h3 className="text-2xl font-Raleway tracking-wider font-bold text-slate-700">
        Order History
      </h3>
      {orders.length < 1 && (
        <p className="text-sm font-mono text-slate-500">
          No order history available
        </p>
      )}
      <div className="mt-4">
        <div>
          {orders.length > 0 &&
            orders.map((singleOrderHistory) => {
              const { orderId, status } = singleOrderHistory;
              return (
                <div
                  key={singleOrderHistory._id}
                  tabIndex={0}
                  className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-fit px-4 mb-3">
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
                        Status :
                      </span>
                      <span className="font-mono text-xl ml-3 text-blue-500 capitalize">
                        {status}
                      </span>
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
      </div>
    </div>
  );
};

export default OrderHistory;
