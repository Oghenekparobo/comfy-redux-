import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          name="email"
          label="email"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          defaultValue="12345"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
          <button type="button" className="btn btn-secondary btn-block my-2">guest user</button>
          <p className="text-center capitalize">
          not a member yet?  <Link to="/register" className="link link-hover link-primary capitalize">register</Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
