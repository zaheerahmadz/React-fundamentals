import React, { useState } from "react";

const MultipleReturn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("User");
  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <div>user</div>
    </>
  );
};

export default MultipleReturn;
