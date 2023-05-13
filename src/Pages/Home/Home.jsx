import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to='/user'>
          <button>Go to User Page</button>
        </Link>
        <Link to='/equipment'>
          <button>Go to Equipment Page</button>
        </Link>
      </div>
    </>
  );
}
