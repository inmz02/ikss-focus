import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
  IoAddCircleOutline,
} from "react-icons/io5";
import { useState, useEffect } from "react";

const MiniSections = ({ title, content, colour, state = false, onAdd }) => {
  const [openState, setOpenState] = useState(state);
  const [isHovered, setIsHovered] = useState(false);
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 767);

  const toggleText = () => {
    setOpenState((prevState) => !prevState);
  };

   useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div>
      <div
        onClick={toggleText}
        className="cursor-pointer flex justify-between px-3 py-2"
        onMouseEnter={() => window.innerWidth >= 767 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth >= 767 && setIsHovered(false)}
      >
        <h2 className={`font-bold ${colour} text-base flex gap-2 items-center`}>
          {title}
          <span
            className={`text-2xl cursor-pointer ${
              isMdOrLarger ? (isHovered ? "block" : "hidden") : "block"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
          >
            <IoAddCircleOutline />
          </span>
        </h2>

        <div className="flex myIcons h-full text-2xl">
          <div className={`${isHovered ? colour : "text-white"}`}>
            {openState ? (
              <IoChevronUpCircleOutline />
            ) : (
              <IoChevronDownCircleOutline />
            )}
          </div>
        </div>
      </div>
      {openState && <div>{content}</div>}
    </div>
  );
};

export default MiniSections;
