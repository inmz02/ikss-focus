import { PiXCircle } from "react-icons/pi";
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-col gap-5" id={id}>
      {inputs && inputs.length > 0 ? (
        inputs.map((input, index) => (
          <div
            className="flex gap-2 items-center w-full mx-3"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
              <img
                src={
                  input.completed
                    ? "https://i.imgur.com/Ae7avbn.png"
                    : "https://i.imgur.com/LdS0mhz.png"
                }
                alt={input.completed ? "pink tick" : "grey tick"}
              />
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
            <PiXCircle
              className={`text-xl ${
                hoveredIndex === index ? "text-my-dark-red" : "text-white"
              } cursor-pointer`}
              onClick={() => onInputDelete(index)}
            />
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default TemplateWrapper;
