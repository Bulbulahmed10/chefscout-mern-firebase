import React from "react";




const OrderHistory = () => {
  return (
    <div className="m-8">
      <h3 className="text-2xl font-Raleway tracking-wider font-bold text-slate-700">
        Order History
      </h3>
      <div className="mt-4">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-fit px-4">
          <div className="collapse-title text-lg font-medium flex gap-14">
            <div>
              <span className="uppercase font-mono font-medium">
                Order Id :
              </span>
              <span className="font-mono text-xl ml-3 text-blue-500">
                daaae776-2056-414c-9155-40e71f1c0b68
              </span>
            </div>
            <div>
              <span className="uppercase font-mono font-medium">Status :</span>
              <span className="font-mono text-xl ml-3 text-blue-500 capitalize">
                Processing
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
                <tbody>
                  <tr>
                    <th>
                      <span>1</span>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-14 h-14">
                            <img src="" alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">name</div>
                        </div>
                      </div>
                    </td>
                    <th> $45 </th>
                    <td className="text-xl font-bold font-mono ">1</td>
                    <th> $45 </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
