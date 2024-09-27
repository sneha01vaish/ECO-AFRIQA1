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

      <div className="flex w-[88%] justify-between">
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
    </section>
  )
}

export default Transporters