import React from "react"
import { Link } from "react-router-dom"

function Home() {

  return (
    <ul className="navigation">
        <Link to={"/"}>Home</Link>
        <Link to={"/todo"}>Todo List</Link>
        <Link to={"/shop"}>Shop</Link>
    </ul>
  )
}

export default Home