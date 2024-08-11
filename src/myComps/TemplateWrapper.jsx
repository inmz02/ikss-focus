import { PiXCircle } from "react-icons/pi";
import { useEffect, useState } from "react";
import CustomPopup from "./CustomPopup";

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
   const [popupInfo, setPopupInfo] = useState({
     visible: false,
     item: null,
     index: null,
   });
  
  const handleLongPress = (item, index, e) => {
    e.preventDefault();
    setPopupInfo({
      visible: true,
      item: item.text,
      index: index,
    });
  };

  const handleConfirmDelete = () => {
    if (popupInfo.index !== null) {
      onInputDelete(popupInfo.index);
    }
    setPopupInfo({ visible: false, item: null, index: null });
  };

  const handleCancelDelete = () => {
    setPopupInfo({ visible: false, item: null, index: null });
  };

  // Hide the popup if clicked outside
  const handleClickOutside = (e) => {
    if (
      popupInfo.visible &&
      !e.target.closest(".todo-item") &&
      !e.target.closest(".popup")
    ) {
      setPopupInfo({ visible: false, item: null, index: null });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupInfo.visible]);



  return (
    <div className="flex flex-col gap-5" id={id}>
      {inputs && inputs.length > 0 ? (
        inputs.map((input, index) => (
          <div
            className="flex gap-2 items-center w-full"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={(e) => handleLongPress(input, index, e)}
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
      {popupInfo.visible && (
        <CustomPopup
          item={popupInfo.item}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}


    </div>
  );
};

export default TemplateWrapper;
