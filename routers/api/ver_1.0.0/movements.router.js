"use strict";

const express = require("express");
const router  = express.Router();

// ########################################################################## //
// ####  TODO: Connect to mongoose and check for credentials to perform  #### //
// ####        certain operations like "DELETE"                          #### //
// ########################################################################## //

router.use(express.json())
  .get('/', (req, res) => {
    // TODO: get all movements of the logged user, like payments, orders, etc.
    if (req.query && !req.body) {
      // TODO: handle query params
      const queryParams = req.query;
      res.json({ method: "GET", queryParams: queryParams });
    } else if (!req.query && req.body) {
      // TODO: handle body params
      const bodyParams = req.body;
      res.json({ method: "GET", bodyParams: bodyParams });
    }
    res.json({ method: "GET", movements: [] });
  })
  .get("/:movementCode", (req, res) => {
    // TODO: get the movement with <movementCode> if it has been made by
    // the logged user.
    const movementCode = req.params.movementCode;
    res.json({ method: "GET", movementCode: movementCode });
  })
  .post('/', (req, res) => {
    // TODO: post the new movement created by the LOGGED USER.
    const movement = req.body;
    res.json({ method: "POST", movement: movement });
  });

// NOTE: no PATCH, PUT, DELETE. This is because all movements should be stored
//       for Legal reasons.

module.exports = router;
