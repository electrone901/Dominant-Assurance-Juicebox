import React, { useEffect, useState } from "react";
import logoTest from "../../images/llogo.png";
import { Link } from "react-router-dom";

import {
  Grid,
  StylesProvider,
  Container,
  Card,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import "./LandingPage.css";
import img1 from "../../images/animate 1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img4.png";

function LandingPage(props) {
  return (
    <StylesProvider injectFirst>
      <div className="container">
        <div className="decorationNav"> </div>
        <section className="landingBanner">
          <img src="/prev.png" className="logoTest" alt="" />
          <p className="banner-title">
          Fund your project.
          </p>
          <Button
            variant="contained"
            component={Link}
            to="/classes"
            className="banner-btn"
          >
            Get Started{" "}
          </Button>{" "}
          <br />
          <p className="banner-lookup">
          Join thousands of projects using Juicebox to fund, operate, and scale their ideas & communities transparently on Ethereum.
          </p>{" "}
        </section>
        <section className="howItWorks">
          <p className="banner-title2"> Join the Dominant Assurance Juicebox App Family </p>
          <p className=""> The way it works is simple, fast and free. </p>
          <div className="parent-flex">
            <div className="flex-item">
              <img src={img1} alt="" style={{ height: "250px" }} />{" "}
              <p className="item-text"> 1. Create your project</p>{" "}
            </div>
            <div className="flex-item">
              <img src={img2} alt="" style={{ height: "300px" }} />{" "}
              <p className="item-text"> 2. Manage your funds</p>{" "}
            </div>
            <div className="flex-item">
              <img src={img3} alt="" style={{ height: "250px" }} />{" "}
              <p className="item-text"> 3. Build your community </p>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </StylesProvider>
  );
}

export default LandingPage;
