// import React from "react";

// const ProgressBar = () => {
//   const steps = [
//     "Preliminary",
//     "Your Details",
//     "KYC",
//     "Parties",
//     "Claim",
//     "Review",
//     "Payment",
//   ];

//   return (
//     <div className="relative w-full bg-gray-50 px-5 py-6 font-poppins">
//       {/* Notification and Profile Icons at the top right */}
//       <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
//         <button className="p-2">
//           <img
//             src="./bell_15031141.png"
//             alt="Notification Bell"
//             className="w-6 h-6"
//           />
//         </button>
//         <button className="p-2 rounded-full">
//           <img
//             src="./user_10904394.png"
//             alt="Profile Icon"
//             className="w-6 h-6"
//           />
//         </button>
//       </div>

//       {/* Progress Bar Steps */}
//       <div className="flex items-center justify-between mt-12 relative">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center relative font-poppins"
//             style={{ flex: 1 }}
//           >
//             {/* Step Name Above */}
//             <span
//               className={`text-sm ${
//                 index < 3 ? "font-poppins text-gray-600 font-semibold" : "text-gray-500"
//               } mb-2`}
//             >
//               {"0" + (index + 1)} {step}
//             </span>

//             {/* Line Segment Behind the Circle */}
//             {index < steps.length - 1 && (
//               <div
//                 className={`absolute top-3/4 left-0 h-0.5 ${
//                   index < 2
//                     ? "bg-blue-500" // Blue solid line for steps 1, 2, 3
//                     : index === 2
//                     ? "border-t-2 border-dashed border-blue-500" // Dotted line after the 3rd step
//                     : "bg-gray-300"   // Gray line for remaining steps
//                 }`}
//                 style={{
//                   width: "100%", // Full width between the circles
//                   marginLeft: "1", // Start from the center of the circle
//                   zIndex: 0, // Ensure the line goes behind the circles
//                   transform: "translateY(-50%)", // Align line vertically to the center of circles
//                   left: "50%", // Center the line horizontally
//                 }}
//               ></div>
//             )}

//             {/* Circle Positioned on the Line */}
//             <div
//               className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
//                 index < 3
//                   ? "border-blue-500 bg-blue-500 text-white"
//                   : index === 3
//                   ? "border-blue-500 bg-white text-blue-500"
//                   : "border-gray-300 bg-gray-100"
//               }`}
//               style={{
//                 marginTop: "0.5rem", // Center the circles vertically
//                 position: "relative", // Make sure circles are on top
//                 zIndex: 1
//               }}
//             >
//               {index < 3 ? (
//                 <span className="font-poppins text-sm font-bold">✓</span>
//               ) : null}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;



import React from "react";

const ProgressBar = () => {
    const steps = [
        "Preliminary",
        "Your Details",
        "KYC",
        "Parties",
        "Claim",
        "Review",
        "Payment",
    ];

    return (
        <div className="relative w-full bg-gray-100 px-5 py-6 font-poppins">
            {/* Notification and Profile Icons at the top right */}
            <div className="absolute top-4 right-4 flex items-center space-x-4 z-10">
                <button className="p-2">
                    <img
                        src="./bell_15031141.png"
                        alt="Notification Bell"
                        className="w-6 h-6"
                    />
                </button>
                <button className="p-2 rounded-full">
                    <img
                        src="./user_10904394.png"
                        alt="Profile Icon"
                        className="w-6 h-6"
                    />
                </button>
            </div>

            {/* Progress Bar Steps */}
            <div className="flex items-center justify-between mt-12 relative bg-gray-100">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center relative font-poppins"
                        style={{ flex: 1 }}
                    >
                        {/* Step Name Above */}
                        <span
                            className={`text-sm ${index < 3
                                    ? "font-poppins text-gray-600 font-bold"
                                    : "text-gray-500"
                                } mb-2`}
                        >
                            {"0" + (index + 1)} {step}
                        </span>

                        {/* Line Segment Behind the Circle */}
                        {index < steps.length - 1 && (
                            <div
                                className={`absolute top-3/4 left-0 h-0.5 ${index < 2
                                        ? "bg-blue-500" // Blue solid line for steps 1, 2, 3
                                        : index === 2
                                            ? "border-t-2 border-dashed border-blue-500" // Dotted line after the 3rd step
                                            : "bg-gray-300" // Gray line for remaining steps
                                    }`}
                                style={{
                                    width: "100%", // Full width between the circles
                                    marginLeft: "1", // Start from the center of the circle
                                    zIndex: 0, // Ensure the line goes behind the circles
                                    transform: "translateY(-50%)", // Align line vertically to the center of circles
                                    left: "50%", // Center the line horizontally
                                }}
                            ></div>
                        )}

                        {/* Circle Positioned on the Line */}
                        <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${index < 3
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : index === 3
                                        ? "border-blue-500 bg-white text-blue-500"
                                        : "border-gray-300 bg-gray-100"
                                }`}
                            style={{
                                marginTop: "0.5rem", // Center the circles vertically
                                position: "relative", // Make sure circles are on top
                                zIndex: 1,
                            }}
                        >
                            {index < 3 ? (
                                <span className="font-poppins text-sm font-bold">✓</span>
                            ) : null}
                        </div>

                        {/* Add Phrase Below Step 4 */}
                        {index > 2 && (
                            <div className="absolute top-full mt-0.5">
                                <span className="text-xs text-gray-500">(Approx 5 Min)</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
