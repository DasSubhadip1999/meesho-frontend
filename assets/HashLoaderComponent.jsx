import HashLoader from "react-spinners/HashLoader";

const HashLoaderComponent = () => {
  const overrideCss = {
    position: "fixed",
    left: "43%",
    top: "48%",
    zIndex: 40,
  };
  return (
    <div
      style={overrideCss}
      className="bg-white w-20 h-20 p-10 rounded-md grid place-items-center"
    >
      <HashLoader color={`#f43397`} />
    </div>
  );
};

export default HashLoaderComponent;
