const Boxes = ({ stylesArr }) => {
  return (
    <>
      {stylesArr.map((item, index) => (
        <div
          key={index}
          style={{
            width: item.width,
            height: item.height,
            backgroundColor: item.backgroundColor,
            margin: "10px",
          }}
        ></div>
      ))}
    </>
  );
};

export default Boxes;
