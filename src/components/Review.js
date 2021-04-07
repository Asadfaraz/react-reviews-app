import React from "react";
import classes from "./review.module.css";
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Review = (props) => {
  // data
  const { name, job, image, text } = props.data;
  const nextPerson = props.nextPerson;
  const prevPerson = props.prevPerson;
  const randomPrev = props.randomPrev;

  return (
    <div className={classes.main}>
      <h1>Our Reviews</h1>
      <hr />
      <article>
        <section className={classes.imagesection}>
          <FaQuoteRight className={classes.quoteicon} />
          <img src={image} alt={name} />
        </section>

        <section className={classes.infosection}>
          <h3>{name}</h3>
          <h4>{job}</h4>
          <p>{text}</p>
        </section>
        <div className={classes.changeRev}>
          <button
            type="button"
            className={classes.leftRev}
            onClick={prevPerson}
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className={classes.rightRev}
            onClick={nextPerson}
          >
            <FaChevronRight />
          </button>
        </div>
        <div>
          <button
            type="button"
            className={classes.randomBtn}
            onClick={randomPrev}
          >
            Random Review
          </button>
        </div>
      </article>
    </div>
  );
};

export default Review;
