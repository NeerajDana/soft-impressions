import React from "react";

export default function OnBoarding() {
  const slides = [
    {
      "": "",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 md:justify-around md:flex-row">
      <div className="py-8 ">
        <img src={img.default} />
      </div>
      <div className="py-8 ">
        <div className="flex flex-col justify-between p-8 bg-white rounded-xl">
          <h1 className="text-gray-800">Manage Files</h1>
          <p className="mt-4 text-sm text-gray-600">
            Our service was designed to give you the full flexibility when it
            comes to managing the files.
          </p>
          <div className="flex items-center justify-between mt-8">
            <span>skip</span>
            <div className="flex">
              <div className="p-1 mx-1 border rounded-full bg-primary border-primary "></div>
              <div className="p-1 mx-1 border rounded-full border-primary "></div>
              <div className="p-1 mx-1 border rounded-full border-primary "></div>
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28" cy="28" r="28" fill="#5D54C1" />
                <path
                  d="M38 28H18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31 35L38 28L31 21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
