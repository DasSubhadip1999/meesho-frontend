import ClipLoader from "react-spinners/ClipLoader";

const ClipLoaderComponent = () => {
  const overrideCss = {
    position: "absolute",
    left: "39%",
    top: "30%",
    zIndex: 10,
  };
  return (
    <div
      style={overrideCss}
      className="bg-white w-20 h-20 p-10 rounded-md grid place-items-center shadow-md"
    >
      <ClipLoader color={`#f43397`} />
    </div>
  );
};

export default ClipLoaderComponent;
