import React from "react";

function ErrorTemplate({ message }) {
  return (
    <div className="container text-center">
      <h1>{message}</h1>
    </div>
  );
}

export default ErrorTemplate;
