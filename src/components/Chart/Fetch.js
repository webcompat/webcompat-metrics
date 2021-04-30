/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";

import SvgDost from "./stats-dots.svg";
import classes from "./Chart.module.css";
import Container from "./Container";

const Fetch = (props) => {
  return (
    <Container title={"Rendering Chart"}>
      <div className={classes.fetch}>
        <SvgDost fill="#58666e" width={"7em"} height={"7em"} />
        <div className={classes.fetchTitle}>Rendering Chart...</div>
      </div>
    </Container>
  );
};

export default Fetch;
