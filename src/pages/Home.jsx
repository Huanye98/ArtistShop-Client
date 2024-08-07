import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="m-0 relative flex">
      <Link to={"/portfolio"}>
        <div className="bg-green-500 w-20 p-3">Portfolio</div>
      </Link>

      <Link to={"/store"}>
        <div className="bg-blue-500 w-20 p-3" >
          Store
        </div>
      </Link>
    </div>
  );
}

export default Home;
