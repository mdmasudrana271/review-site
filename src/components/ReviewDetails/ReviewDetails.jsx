import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TeamContext } from "../Main/Main";
import './ReviewDetails.css'

const ReviewDetails = () => {
  const team = useContext(TeamContext);
  // console.log(details)
  const { id } = useParams();

  const person = team.find(single => single.id === id);

  const { name, description, picture } = person;
  return (
    <div>
      <div
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 mt-10 px-5 details"
          >
            <img
              src={picture}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {name}
              </h3>
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              <p>
                {description}
              </p>
            </div>
          </div>
    </div>
  );
};

export default ReviewDetails;
