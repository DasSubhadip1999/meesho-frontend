import HashLoader from "react-spinners/HashLoader";

const HashLoaderComponent = () => {
  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
    zIndex: 20,
  };
  return <HashLoader overrideCss={overrideCss} />;
};

export default HashLoaderComponent;
