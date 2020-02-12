import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <h1>{props.title}</h1>
      <input name="city" type="text" />
      <input name="country" type="text" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
