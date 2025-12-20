import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("k");
  const [error, setError] = useState(false);
  const firstValue = text || "Hello World";
  const secondValue = text && "Hello World";
  return (
    <>
      <div>
        <h1>value:1{firstValue}</h1>
        <h1>value:2{secondValue}</h1>
        <button
          onClick={() => setError(true)}
          className="btn p-5 bg-gray-500 text-white "
        >
          Change state
        </button>
        {error && <h1>Error</h1>}
        {error ? <h2>There is an error</h2> : <h2>There is no error</h2>}
      </div>
    </>
  );
};

export default ShortCircuit;
