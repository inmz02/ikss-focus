import { PiTrash } from "react-icons/pi";
import { useState } from "react";

const TemplateWrapper = ({
  inputs = [],
  onInputChange,
  onInputDelete,
  onToggleComplete,
  id,
  focusBorder,
  activeBorder,
}) => {

  return (
    <div className="flex flex-col gap-5" id={id}>
      {inputs && inputs.length > 0 ? (
        inputs.map((input, index) => (
          <div
            className="flex gap-2 items-center w-full"
            key={index}
          >
            <div
              className={`tickBox cursor-pointer ${
                !input.text ? "cursor-not-allowed" : ""
              }`}
              onClick={() => {
                if (input.text) {
                  onToggleComplete(index);
                }
              }}
            >
              <div
                className={` tickBoxNew 
                ${input.completed ? "completed" : "incomplete"}
              `}
              >
                <div className="innerTickBox"></div>
              </div>
            </div>
            <input
              type="text"
              placeholder="추가. . ."
              className={`text-sm w-[79%] md:w-[89%] border-b active:border-b ${focusBorder} ${activeBorder} border-b-white`}
              value={input.text || ""}
              onChange={(e) => {
                const newValue = e.target.value;
                onInputChange(index, newValue);
              }}
              onBlur={(e) => {
                const newValue = e.target.value;
                if (newValue.trim() === "") {
                  onInputDelete(index);
                }
              }}
            />
            <PiTrash
              className={`text-lg text-[#f4acb7] cursor-pointer`}
              onClick={() => onInputDelete(index)}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-400 italic text-xs">omg you're empty. . .</p>
      )}
    </div>
  );
};

export default TemplateWrapper;
