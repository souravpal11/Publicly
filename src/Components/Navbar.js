// import React, { Component } from 'react'

// export class Navbar extends Component {
//   render() {
//     return (
//       <>
//       <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">Publically</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="/">Home</a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown
//                   </a>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="/">Action</a></li>
//                     <li><a className="dropdown-item" href="/">Another action</a></li>
//                     <li><hr className="dropdown-divider"/></li>
//                     <li><a className="dropdown-item" href="/">Something else here</a></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//               </form>
//             </div>
//           </div>
//         </nav>        
//       </div>
//       </>
//     )
//   }
// }

// export default Navbar

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


          <div>

            <button
              className="navbar-toggler me-2"
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
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("technology")}> Technology </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("sports")}> Sports </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("health")}> Health </button> 
              <button className="btn btn-dark mx-1 my-1 w-100 w-lg-auto" onClick={() => props.changeCategory("science")}> Science </button>
          </ul>

        </div>

        {/* Search */}
        <div className="collapse navbar-collapse mx-2" id="searchBar">

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