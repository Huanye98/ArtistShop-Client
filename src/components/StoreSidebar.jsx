import React from "react";

function StoreSidebar() {
  return (
    <div className="h-screen w-20 bg-blue-500 mt-7 mb-7">

      <input type="text" />
      <button>Search</button>
      <ul className="text-xs">
        <li>Apparel</li>
        <ul>
          <li>T-shirts</li>
        </ul>
        <li>Home goods</li>
        <ul>
          <li>Phone cases</li>
        </ul>
        <li>Prints</li>
        <ul>
          <li>A3</li>
          <li>A5</li>
        </ul>
      </ul>
    </div>
  );
}

export default StoreSidebar;
