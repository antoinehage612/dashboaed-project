import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      this is products pages
      <Link to="/" className="underline">
        go to dashboard
      </Link>
    </div>
  );
}
