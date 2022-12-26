import HashLoader from "react-spinners/HashLoader";

const HashLoaderComponent = () => {
  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
    zIndex: 20,
  };
  return <HashLoader cssOverride={overrideCss} color={`#f43397`} />;
};

export default HashLoaderComponent;
