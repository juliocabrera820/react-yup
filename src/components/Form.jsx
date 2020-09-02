import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().trim().required("first name is required"),
  lastName: yup.string().trim().required("last name is required"),
  age: yup
    .number("age must be a number")
    .positive("age must be positive")
    .integer("age must a integer")
    .required("age is required")
    .typeError("you must specify a number"),
});

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            ref={register}
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
            ref={register}
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
        <div className="form-group">
          <label>Age</label>
          <input
            ref={register}
            type="text"
            placeholder="Type age"
            name="age"
            className={`form-control ${errors.age ? "is-invalid" : "is-valid"}`}
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">
            {errors.age && errors.age.message}
          </div>
        </div>
        <button className="btn btn-primary btn-block">Send</button>
      </form>
    </div>
  );
};

export default Form;
