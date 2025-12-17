import React from "react";

const Typography = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Typography Test
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Tailwind CSS gives you full control over typography using utility
          classes. You can adjust font size, weight, color, spacing, and
          alignment easily.
        </p>

        <p className="text-lg font-semibold text-blue-600 mb-2">
          This is a highlighted sentence.
        </p>

        <p className="uppercase tracking-widest text-gray-500 text-sm">
          uppercase heading style
        </p>
      </div>
    </div>
  );
};

export default Typography;
