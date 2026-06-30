import React from "react";
import Logo from "../Logo.png"

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container">

        {/* Logo + Icons */}
        <div className="d-flex w-100 justify-content-between align-items-center">

          <a className="navbar-brand mx-3" href="/">
            <img src={Logo} alt="Publicly" style={{height:'40px',width:'120px'}} className="logo" />
          </a>
          
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Language
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" onClick={() => props.changeLanguage("en")} href="#">English</a></li>
    <li><a class="dropdown-item" onClick={() => props.changeLanguage("hi")} href="#">Hindi</a></li>
    <li><a class="dropdown-item" onClick={() => props.changeLanguage("mr")} href="#">Marathi</a></li>
  </ul>
</div>

          <div style={{display: "flex"}}>

            <button
              className="navbar-toggler me-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#searchBar"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>

        </div>

        {/* Categories */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("top")}> Home </button>
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("business")}> Business </button>
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("politics")}> Politics </button>
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("technology")}> Technology </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("sports")}> Sports </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("health")}> Health </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("science")}> Science </button>
          </ul>

        </div>

        {/* Search */}
        <div className="collapse navbar-collapse mx-2 my-2 w-300" id="searchBar">

          <form className="d-flex" onSubmit={(e)=>{ e.preventDefault(); props.searchNews(); }}>
            <input className=" border border-grey rounded-start rounded-end-0 p-3 py-1 focus-ring focus-ring-grey "
            type="search" 
            placeholder="Search News" 
            value={props.search} 
            onChange={(e) => props.setSearch(e.target.value)} /> 
            <button className=" border border-light rounded-end px-2 bg-light " 
            type="button" onClick={props.searchNews} > 
            <i className="fa-solid fa-magnifying-glass"></i> 
            </button>
          </form>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;