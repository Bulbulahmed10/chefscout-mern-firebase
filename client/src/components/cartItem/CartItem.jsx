import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = ({ singleCart, index }) => {
  const { recipeName, image, quantity, price } = singleCart;
  return (
    <tbody>
      <tr>
        <th>
          <span>{index + 1}</span>
        </th>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-14">
                <img src={image} alt={recipeName} />
              </div>
            </div>
            <div>
              <div className="font-bold">{recipeName}</div>
            </div>
          </div>
        </td>
        <th> ${price} </th>
        <td className="text-xl font-bold font-mono ">{quantity}</td>
        <td>
          <button className=" bg-blue-200 p-2 rounded-full">
            <FiMinusCircle className="text-lg " />
          </button>
          <button className="bg-blue-200 p-2 rounded-full ml-4">
            <BsPlusCircle className="text-lg " />
          </button>
        </td>
        <th> ${price * quantity} </th>
        <th>
          <button className="bg-red-400 p-2 rounded-full hover:bg-red-500">
            <RiDeleteBinLine className="text-2xl text-slate-900" />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default CartItem;
