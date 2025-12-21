import React, { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  // Delete person by index
  const Delete = (indexToDelete) => {
    setPeople((people) => {
      return people.filter((_, index) => index !== indexToDelete);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email && message) {
      const person = { firstName, email, message };
      setPeople((people) => [...people, person]);
      setFirstName("");
      setMessage("");
      setEmail("");
    } else {
      console.log("The Input is Empty");
    }
  };

  return (
    <>
      <article>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md space-y-5"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Application Form
          </h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Write your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </article>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 my-5">
        {people.map((person, index) => {
          const { firstName, email, message } = person;
          return (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl shadow-lg p-5 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Name: {firstName}
              </h3>

              <p className="text-sm text-blue-600 mb-3 break-all">
                Email: {email}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                Message: {message}
              </p>

              <button
                onClick={() => Delete(index)}
                className="my-5 cursor-pointer hover:bg-red-600 bg-red-500 px-5 py-3 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ControlledInputs;
