/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [addedCourses, setAddedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    fetch("./courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddToCart = (course) => {
    let price = parseFloat(course.price.replace("$", ""));
    const duration = parseInt(course.duration.replace(" hours", ""));

    if (
      addedCourses.some((item) => item.id === course.id) ||
      totalDuration + duration > 20
    ) {
      if (totalDuration + duration > 20) {
        alert("You can't purchase more than 20 hours");
      } else {
        alert("Already added in Cart");
      }
    } else {
      setSelectedCourse([...selectedCourse, course]);
      setAddedCourses([...addedCourses, course]);
      setTotalDuration(totalDuration + duration);
      price += parseFloat(course.price.replace("$", ""));
      setTotalPrice(price);
    }
  };

  return (
    <div className="flex mt-14">
      <div className="left-side pr-8">
        <div className="course-list grid grid-cols-3 gap-4 shadow-slate-600">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex shadow-lg hover:shadow-2xl rounded-2xl"
            >
              <div className="card h-[380px] w-[320px] p-5 gap-5">
                <div className="">
                  <img src={course.image} alt={course.title} />
                  <div>
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  </div>
                  <div>
                    <p className="my-3 font-thin">{course.description}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Duration: {course.duration}</p>
                    <p>Price: {course.price}</p>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleAddToCart(course)}
                      className="bg-sky-600 hover:bg-sky-800 px-20 py-2 rounded-2xl text-white text-xl mt-3"
                    >Select
                      {addedCourses.some((item) => item.id === course.id)
                        
                        }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Cart
          totalPrice={totalPrice}
          selectedCourse={selectedCourse}
          totalDuration={totalDuration}
        ></Cart>
      </div>
    </div>
  );
}

