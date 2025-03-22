const Line = ({ type }) => {
    // Using template literals to set class names for horizontal and vertical lines
    const classNameH = "w-5 h-full";
    const classNameV = "w-full h-3 grid grid-cols-3";
  
    return (
      <div className={type === "H" ? classNameH : classNameV}>
        {/* Color blocks */}
        <div className="bg-base_500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-violet-950"></div>
      </div>
    );
  };
  
  export default Line;
  