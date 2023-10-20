import React from "react";

const Loading = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </section>
  );
};

export default Loading;
