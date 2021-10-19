import React from "react";
import PropTypes from "prop-types";

const Form = ({ _handleSubmit }) => {
  return (
    <>
      <form onSubmit={_handleSubmit} className="text-center">
        <label className="form-label w-75">
          Buscar:
          <input type="text" className="form-control " name="inputText" />
        </label>
        <button type="submit" className="btn btn-success m-2">
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  _handleSubmit: PropTypes.func,
};

export default Form;
