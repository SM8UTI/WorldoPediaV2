import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="Error404">
      <div className="container">
        <div className="text">
          <h1>404</h1>
          <p>Something went Wrong!</p>
        </div>
        <Link to="/" className="pBtn">
          Back to Home
        </Link>
      </div>
      <div className="image">
        <img src="/error.webp" alt="worldo-pedia error" />
      </div>
    </div>
  );
};

export default Error404;
