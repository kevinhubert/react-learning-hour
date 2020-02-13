import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <h1>{props.title}</h1>
      <div className="input-group">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            type="submit"
          >
            Get Weather!
          </button>
        </div>
        <input
          name="city"
          type="text"
          className="form-control"
          defaultValue="austin"
        />
        <input
          name="country"
          type="text"
          className="form-control"
          defaultValue="us"
        />
      </div>
    </form>
  );
};

export default Form;
