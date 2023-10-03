import React from "react";
import About from "../components/aaca/About";
import Team from "../components/aaca/Team";
import Affiliates from "../components/aaca/Affiliates";

export default function AACA() {
  return (
    <div>
      {/* about */}
      <div className="bg-gray-100 py-6">
        <About></About>
      </div>
      {/* affiliates */}
      <div className="bg-gray-50 py-16">
        <Affiliates></Affiliates>
      </div>
      {/* team */}
      <div className="bg-gray-100">
        <Team></Team>
      </div>
    </div>
  );
}
