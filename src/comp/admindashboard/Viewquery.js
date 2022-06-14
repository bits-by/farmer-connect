import { TextareaAutosize } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

const Viewquery = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <div className="container  ">
        <div className="card col-7 mx-auto mt-5">
      <div className="card-body">
        <h2>Query</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex  mb-3">
            <h2></h2>
            <label>Name :- </label>
            <input
              type="text"
              className="form-control"
              {...register("username", {
                required: "Required",
                validate: (value) => value !== "admin" || "Nice try!",
              })}
            />
            {errors.username && errors.username.message}
          </div>
          <div className=" d-flex mb-3">
            <label>Email :- </label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && errors.email.message}
          </div>

          <div className="d-flex mb-3">
          <label>Query :- </label>
            <TextareaAutosize
              
              className="form-control"
              {...register("query", {
                required: "Required",
              })}
            />
            {errors.query && errors.query.message}
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Viewquery;
