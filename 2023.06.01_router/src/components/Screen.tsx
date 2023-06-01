import React from "react";
import { Link } from "react-router-dom";

export default function Screen() {
  return (
    <>
      <div className="container">
        <h1>리액트 라우터를 실험해봅시다</h1>
        <h2>Screen.tsx 페이지입니다</h2>
        <Link to="/Second">Second로 이동</Link>
      </div>
    </>
  );
}
