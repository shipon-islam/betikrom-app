"use client";
import EmptySvg from "@/components/EmptySvg";
import { useCardContext } from "@/context/CardContextProvider";
import {
  QUANTITY_DEC,
  QUANTITY_INC,
  REMOVE_CARD,
  TOTAL_AMOUNT,
} from "@/context/actions/carAction";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { TbMinus, TbPlus } from "react-icons/tb";

function Card() {
  const { state, dispatch } = useCardContext();

  useEffect(() => {
    dispatch({ type: TOTAL_AMOUNT });
  }, [state.product_card, dispatch]);
  return (
    <main className="container pb-20">
      <div className="grid lg:grid-cols-[2fr_minmax(340px,1fr)]  grid-cols-1 gap-x-6 mt-16">
        <section className="text-gray-200">
          <div className="mx-auto max-h-[70vh] overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-100 text-sm bg-gray-600 rounded-tl rounded-bl">
                    Product
                  </th>

                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-100 text-sm bg-gray-600">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-100 hidden md:block text-sm bg-gray-600">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-100 text-sm bg-gray-600">
                    Subtotal
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-100 text-sm bg-gray-600 rounded-tr rounded-br pr-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.product_card.length > 0 &&
                  state.product_card.map((product) => {
                    return (
                      <tr key={product.id} className="border-b">
                        <td className="w-[20rem] py-3">
                          <div className="flex flex-col-reverse md:flex-row items-center">
                            <Image
                              width={50}
                              height={50}
                              className=" h-auto rounded-sm"
                              src={product.image}
                              alt="card"
                            />
                            <small className="text-[1rem] md:text-lg w-fit pl-4 capitalize">
                              {product.title}
                            </small>
                          </div>
                          <div className="px-4 md:hidden text-center text-md py-3 ">
                            $ {product.price}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex bg-gray-600/50 w-fit rounded-sm px-[2px]">
                            <button
                              onClick={() =>
                                dispatch({
                                  type: QUANTITY_DEC,
                                  payload: product.id,
                                })
                              }
                            >
                              <TbMinus className="text-xl hover:text-yellow-400 " />
                            </button>
                            <p className="px-2 md:px-4  font">
                              {product.quantity}
                            </p>

                            <button
                              onClick={() =>
                                dispatch({
                                  type: QUANTITY_INC,
                                  payload: product.id,
                                })
                              }
                            >
                              <TbPlus className="text-xl hover:text-yellow-400 " />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 hidden md:table-cell text-md py-3   ">
                          $ {product.price}
                        </td>
                        <td className="px-4 relative py-3 text-md  ">
                          <AiOutlineClose className="text-lg absolute  top-4 right-6 hover:text-red-500 cursor-pointer md:hidden" />
                          ${" "}
                          {parseFloat(
                            (product.price * product.quantity).toFixed(2)
                          )}
                        </td>
                        <td className="w-10 text-center hidden md:table-cell">
                          <button
                            onClick={() =>
                              dispatch({
                                type: REMOVE_CARD,
                                payload: product.id,
                              })
                            }
                          >
                            <AiOutlineClose className="text-lg  hover:text-red-500" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {state.product_card.length <= 0 && <EmptySvg />}
          </div>
          <Link
            href="/products"
            className="block w-fit mx-auto  hover:bg-yellow-300 hover:text-gray-900 text-yellow-300 px-4 py-1 my-2 rounded-md transition-colors duration-300 "
          >
            Continue shopping
          </Link>
        </section>
        <section className="bg-gray-800 w-[95%] md:w-full mx-auto h-fit  px-3 pt-8 border-2 border-gray-400 md:font-montserrat font-poppins rounded-md pb-8">
          <div>
            <h1 className="md:text-xl text-md capitalize pb-4">
              card total
              <FiShoppingCart className="inline-block text-2xl  ml-2" />
            </h1>
            <hr />

            <div className="flex justify-between py-2">
              <div className="capitalize text-md md:text-lg">subtotal:</div>
              <div className=" text-md ">$ {state.total_amount}</div>
            </div>
            <hr />
            <div>
              <h1 className="capitalize text-md md:text-lg   pb-3 pt-1">
                shipping:
              </h1>
              <div className="flex justify-between py-2">
                <div className="capitalize text-md md:text-lg  pb-1">
                  Delivery charge
                </div>
                <div className=" text-md md:text-lg ">
                  ${state.deliver_charge}
                </div>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="capitalize text-md md:text-lg ">total:</div>
              <div className=" text-md ">
                $ {Number(state.total_amount + state.deliver_charge).toFixed(2)}
              </div>
            </div>
            <div className="ml-2 mt-8">
              <Link href="/">
                <button
                  className={`border-yellow-300 block sm:w-fit w-[90%] mx-auto sm:ml-auto border-2 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900
            sm:mx-1 px-12 py-1 text-md md:text-md capitalize rounded-md font-semibold   transition-colors duration-500`}
                >
                  checkout
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Card;
