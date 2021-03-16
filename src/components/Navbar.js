import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Variable for window loaction
  let path = window.location.pathname;

  //useState hook to apply proper styling
  const [style, setStyle] = useState({
    nav1: {
      visibility: "",
      width: "",
    },
    nav2: {
      visibility: "",
      width: "",
    },
    nav3: {
      visibility: "",
      width: "",
    },
    nav4: {
      visibility: "",
      width: "",
    },
  });

  //useEffect hook for proper styling on mount depending on path location
  useEffect(() => {
    if (path === "/") {
      setStyle({
        nav1: {
          visibility: "visible",
          width: "100%",
        },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (path === "/about") {
      setStyle({
        nav1: { visibility: "hidden", width: "0%" },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "visible",
          width: "100%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (path === "/shop") {
      setStyle({
        nav1: {
          visibility: "hidden",
          width: "0%",
        },
        nav2: { visibility: "visible", width: "100%" },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (path === "/contact") {
      setStyle({
        nav1: { visibility: "hidden", width: "0%" },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "visible",
          width: "100%",
        },
      });
    }
  }, [path]);

  //onClick handler
  const clicker = (e) => {
    if (e.target.id === "nav1") {
      setStyle({
        nav1: {
          visibility: "visible",
          width: "100%",
        },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav3") {
      setStyle({
        nav1: {
          visibility: "hidden",
          width: "0%",
        },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "visible",
          width: "100%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav2") {
      setStyle({
        nav1: {
          visibility: "hidden",
          width: "0%",
        },
        nav2: { visibility: "visible", width: "100%" },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav4") {
      setStyle({
        nav1: { visibility: "hidden", width: "0%" },
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
        nav4: {
          visibility: "visible",
          width: "100%",
        },
      });
    }
  };
  //onMouseEnter handler
  const hoverIn = (e) => {
    if (e.target.id === "nav1") {
      setStyle({
        ...style,
        nav1: {
          visibility: "visible",
          width: "100%",
        },
      });
    } else if (e.target.id === "nav2") {
      setStyle({
        ...style,
        nav2: {
          visibility: "visible",
          width: "100%",
        },
      });
    } else if (e.target.id === "nav3") {
      setStyle({
        ...style,
        nav3: {
          visibility: "visible",
          width: "100%",
        },
      });
    } else if (e.target.id === "nav4") {
      setStyle({
        ...style,
        nav4: {
          visibility: "visible",
          width: "100%",
        },
      });
    }
  };
  //onMouseLeave handler
  const hoverOut = (e) => {
    if (e.target.id === "nav1" && path !== "/") {
      setStyle({
        ...style,
        nav1: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav2" && path !== "/shop") {
      setStyle({
        ...style,
        nav2: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav3" && path !== "/about") {
      setStyle({
        ...style,
        nav3: {
          visibility: "hidden",
          width: "0%",
        },
      });
    } else if (e.target.id === "nav4" && path !== "/contact") {
      setStyle({
        ...style,
        nav4: {
          visibility: "hidden",
          width: "0%",
        },
      });
    }
  };
  //Render component
  return (
    <div className="container" id="navbar">
      <div id="logo">
        <h1>The Rozay shop</h1>
      </div>
      <ul>
        <Link to="/" onClick={clicker}>
          <li onMouseOut={hoverOut} onMouseEnter={hoverIn} id="nav1">
            Home
          </li>
          <div style={style.nav1} id="yolo"></div>
        </Link>
        <Link to="/shop" onClick={clicker}>
          <li onMouseOut={hoverOut} onMouseEnter={hoverIn} id="nav2">
            Shop
          </li>
          <div style={style.nav2} id="yolo"></div>
        </Link>
        <Link to="/about" onClick={clicker}>
          <li onMouseOut={hoverOut} onMouseEnter={hoverIn} id="nav3">
            About
          </li>
          <div style={style.nav3} id="yolo"></div>
        </Link>
        <Link to="/contact" onClick={clicker}>
          <li onMouseOut={hoverOut} onMouseEnter={hoverIn} id="nav4">
            Contact
          </li>
          <div style={style.nav4} id="yolo"></div>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
