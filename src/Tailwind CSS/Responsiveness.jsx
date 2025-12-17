import React from "react";

const Responsiveness = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-10">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
          Responsive Design Test
        </h1>

        {/* Responsive flex */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="p-6 bg-blue-600 text-white rounded-lg flex-1">
            Box 1
            <div className="text-sm sm:text-base md:text-lg">
              Responsive text
            </div>
          </div>

          <div className="p-6 bg-green-600 text-white rounded-lg flex-1">
            Box 2
            <div className="text-sm sm:text-base md:text-lg">
              Responsive text
            </div>
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <div className="p-4 bg-purple-500 text-white rounded">Card 1</div>
          <div className="p-4 bg-purple-500 text-white rounded">Card 2</div>
          <div className="p-4 bg-purple-500 text-white rounded">Card 3</div>
        </div>
      </div>
    </div>
  );
};

export default Responsiveness;
