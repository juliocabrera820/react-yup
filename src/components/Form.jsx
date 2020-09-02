import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  const WHITESPACES = "Whitespaces are not allowed";

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            ref={register({
              required: "You must type a first name",
              validate: (firstName) => firstName.trim() !== "" || WHITESPACES,
            })}
            type="text"
            placeholder="Type first name"
            name="firstName"
            className={`form-control ${
              errors.firstName ? "is-invalid" : "is-valid"
            }`}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            {errors.firstName && errors.firstName.message}
          </div>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            ref={register({
              required: "You must type a last name",
              validate: (lastName) => lastName.trim() !== "" || WHITESPACES,
            })}
            type="text"
            placeholder="Type last name"
            name="lastName"
            className={`form-control ${
              errors.lastName ? "is-invalid" : "is-valid"
            }`}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            {errors.lastName && errors.lastName.message}
          </div>
        </div>
        <button className="btn btn-primary btn-block">Send</button>
      </form>
    </div>
  );
};

export default Form;
