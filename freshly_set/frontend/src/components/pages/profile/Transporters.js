import React from 'react'
import { Link } from "react-router-dom"
import { IoStarSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

function Transporters() {
  return (
    <section className="font-inter">
      <div>

        <h2 className="flex gap-5 font-bold m-0">
          <span className="capitalize text-[#008000]">
            Hello jane, welcome to your dashboard
          </span>
          <Link
            href="/delivery"
            className="text-[#00000080]/50 text-[15px] hover:underline"
          >
            View and manage your deliveries and earnings
          </Link>
        </h2>
      </div>
      <div className='w-[88%]'>
        <div className="flex justify-between">
          <p className="flex flex-col">
            <span className="text-start text-red-600 font-bold">5.5 Ratings</span>
            <span className="flex gap-[1.5px] text-green-600">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </span>
          </p>
          <p className="font-bold text-green-600">200 Deliveries</p>
          <p className="font-bold text-green-600">Lorry Automobile</p>
          <p className="text-3xl"><FaEdit /></p>
        </div>

        <div className="border-y-[1px] border-x-0 border-solid border-slate-900 text-center">
          <p className="uppercase font-bold ">
            <span className="pr-3">Your total earnings:</span>
            <span className="text-red-600">ksh 10,000</span>
          </p>
        </div>
      </div>

      <div >
        <h2 className="capitalize font-bold text-[#000]/80 text-xl text-start">your upcoming deliveries</h2>

        <table className="min-w-full text-center text-sm font-light">
          <thead className="text-green-500">
            <tr className="capitalize">
              <th>Order number</th>
              <th>Order status</th>
              <th>Pick-Up</th>
              <th>Drop-Off</th>
              <th>Client contact</th>
              <th>Expected delivery date/time</th>
            </tr>
          </thead>
          <tbody className="font-bold text-[14px]">
            <tr>
              <td>10256KI</td>
              <td className="text-green-600">ready</td>
              <td>lukas market</td>
              <td>mid apartments</td>
              <td>071234567</td>
              <td>Thursday, 27/10/2024, 12:40pm</td>
            </tr>
            <tr>
              <td>10256KI</td>
              <td className="text-red-600">packaging</td>
              <td>lukas market</td>
              <td>mid apartments</td>
              <td>071234567</td>
              <td>Thursday, 27/10/2024, 12:40pm</td>
            </tr>
            <tr>
              <td>10256KI</td>
              <td className="text-[#000]/80">collection</td>
              <td>lukas market</td>
              <td>mid apartments</td>
              <td>071234567</td>
              <td>Thursday, 27/10/2024, 12:40pm</td>
            </tr>
          </tbody>
        </table>

      </div>

    </section>
  )
}

export default Transporters
