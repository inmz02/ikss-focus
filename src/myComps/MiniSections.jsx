
import { useState, useEffect } from "react";

const MiniSections = ({
  title,
  content,
  colour,
  state = false,
  onAdd,
  imageScr,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMdOrLarger, setIsMdOrLarger] = useState(window.innerWidth >= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMdOrLarger(window.innerWidth >= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        className="cursor-pointer flex justify-between py-2"
        onMouseEnter={() => window.innerWidth >= 767 && setIsHovered(true)}
        onMouseLeave={() => window.innerWidth >= 767 && setIsHovered(false)}
      >
        <h2
          className={`font-bold ${colour} myCateTitle text-lg flex gap-2 items-center`}
        >
          {title}
          <span>
            <img src={imageScr} />
          </span>
          <span
            className={`text-2xl cursor-pointer ${
              isMdOrLarger ? (isHovered ? "block" : "hidden") : "block"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
          >
            <span>
              <div className="myAddBtn"></div>
            </span>
          </span>
        </h2>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default MiniSections;
