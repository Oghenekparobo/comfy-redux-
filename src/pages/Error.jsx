import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

//   console.log(error);

  if (error.status === 404) {
    return  <main className="grid place-items-center min-h-[100vh] px-8">
    <div className="text-center">
      <p className="text-9xl font-bold text-primary">404</p>
      <p className="text-3xl tracking-tight mt-4 sm:text-5xl">page not found</p>
      <p className="mt-6 text-lg leading-7">sorry we couldn't find the page you are looking for</p>
      <div className="mt-10">
        <Link to="/" className="btn btn-secondary">Home</Link>
      </div>
    </div>
  </main>
  }

  return (
    <main className="grid place-items-center min-h-[100vh] px-8">
      <div className="text-center">
        <p className="text-xl font-bold text-primary">there was an error</p>
      </div>
    </main>
  );
};

export default Error;
