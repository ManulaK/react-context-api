import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <h2 className='header'>Power Equipment Renting System</h2>
      <div className='home-container'>
        <Link to='/user'>
          <button className='user-page'>Go to Customer Page</button>
        </Link>
        <Link to='/equipment'>
          <button className='equipment-page'>Go to Equipment Page</button>
        </Link>
      </div>
    </>
  );
}
