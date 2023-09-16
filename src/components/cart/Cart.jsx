/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import React from "react";

export default function Cart({ selectedCourse, totalPrice, totalDuration }) {
  const maxHours = 20;
  const remainingHours = maxHours - totalDuration;

  return (
    <div className="shadow-lg hover:shadow-2xl rounded-2xl h-96 w-80">
      <h1 className="text-blue-800 text-center font-semibold text-lg my-4">
        Credit Hour Remaining{" "}
        {remainingHours > 0 ? `${remainingHours} hr` : "0 hr"}
      </h1>
      {remainingHours < 0 && (
        <div className="text-red-600 text-center font-semibold">
          You can not buy more than 20 hours
        </div>
      )}
      <hr />
      <div>
        <h2 className="text-xl font-bold text-center my-2">Course Name</h2>
        <ol className="text-lg font-light text-center mb-4">
          {selectedCourse &&
            selectedCourse.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
        </ol>
        <hr />
      </div>
      <div className="flex align-bottom flex-col items-baseline self-baseline place-items-end">
        <p className="text-lg my-3 font-thin ml-7">
          Total Duration: {totalDuration} hours
        </p>
        <p className="text-lg  font-thin">
          Total Price:{" "}
          {typeof totalPrice === "number" ? totalPrice.toFixed(2) : ""} USD
        </p>
      </div>
    </div>
  );
}



 