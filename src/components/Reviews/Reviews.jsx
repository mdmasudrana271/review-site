import React, { useContext } from "react";
import { TeamContext } from "../Main/Main";
import Review from '../Review/Review'
import "./Reviews.css";

const Reviews = () => {
  const team = useContext(TeamContext);
  console.log(team);
  return (
    <div className="">
      <div className="mb-10">
        <img
          className="banner w-full"
          src="https://img.freepik.com/free-vector/we-want-your-feedback-yellow-flat-background_1017-38689.jpg?w=996&t=st=1665375157~exp=1665375757~hmac=b30a21f231ec8d5b9e4dadc091ac10382b8c4c3cb07153372dfc4d17c0ff411d"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 p-5">
        {
            team.map(person => <Review key={person.id} person={person}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
