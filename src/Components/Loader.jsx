import loader from "../assets/loader.webm";

const Loader = () => {
  return (
    <div className="Loader">
      <video src={loader} autoPlay muted loop></video>
    </div>
  );
};

export default Loader;
