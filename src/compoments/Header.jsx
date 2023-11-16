import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="py-4">
      <div className="nav bg-gray-800 w-full h-16 border-b-[1px] border-gray-400 container mx-auto">
        <div className="flex items-center justify-between w-full px-6 py-2.5">
          <Link to="/">
          <h1 className="text-2xl text-white font-semibold">
            Moistly <span className="text-xl">Veres</span>
          </h1>
          </Link>

          <div className="nav-login-btn">
            <Link to="/add-movie">
              <button className="px-3 py-2 bg-gray-600 font-semibold flex items-center justify-between space-x-2">
                <AddIcon />
                Add Movie
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
      
    </>
  );
}

export default Header;
