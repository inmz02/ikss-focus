import React from "react";

const CustomPopup = ({ item, onConfirm, onCancel, position }) => {
  if (!item) return null;

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    border: "1px solid lightgray",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "5px",
    zIndex: 1000,
  };

  return (
    <div style={style}>
      <p>Do you want to delete "{item}"?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default CustomPopup;
