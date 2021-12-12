import React from "react";
import "./single-media-comp.scss";

const SingleMediaComp = (props) => {
  const { url = "", src = "", author = "", videoSource = "" } = props;

  return (
    <article className="single-media-comp">
      {videoSource ? (
        <video width="320" height="240" controls>
          <source src={videoSource} type="video/mp4" />
        </video>
      ) : (
        <a
          href={url}
          className="single-media-comp-inner"
          target="_blank"
          rel="noreferrer noopener"
        >
          <figure>
            <img src={src} alt="good morning 1" />
          </figure>
          <h4>
            <i>By</i> {author}
          </h4>
        </a>
      )}
    </article>
  );
};

export default SingleMediaComp;
