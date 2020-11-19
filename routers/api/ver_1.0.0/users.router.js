const express = require("express");
const router = express.Router();

// ########################################################################## //
// ####  TODO: Connect to mongoose and check for credentials to perform  #### //
// ####        certain operations like "DELETE"                          #### //
// ########################################################################## //

router.use(express.json())
  .get('/', (req, res) => {
    // TODO: get users without sensitive data
    if (req.query && !req.body) {
      //TODO: handle query params
    } else if (!req.query && req.body) {
      // TODO: handle body params
    }
    res.type("json").send({ method: "GET", users: [] });
  })
  .get("/:username", (req, res) => {
    // TODO: get user with username without sensitive data
    const username = req.params.username;
    res.type("json").send({ method: "GET", username: username });
  })
  .post('/', (req, res) => {
    // TODO: post the new user
    const user = req.body;
    res.type("json").send({ method: "POST", user: user });
  })
  .patch('/', (req, res) => {
    // TODO: patch user/s selected by the query with the fields
    const [query, fields] = req.body;
    res.type("json").send({ method: "PATCH", query: query, fields: fields });
  })
  .patch("/:usename", (req, res) => {
    // TODO: patch user with username with the fields
    const [username, fields] = [req.params.username, req.body];
    res.type("json").send({ method: "PATCH", username: username, fields: fields });
  })
  .put('/', (req, res) => {
    // TODO: replace user selected by query with new user
    const [query, newUser] = [req.body];
    res.type("json").send({ method: "PATCH", query: query, user: newUser });
  })
  .put("/:username", (req, res) => {
    // TODO: replace user with <username> with the new user
    const [username, newUser] = [req.params.username, req.body];
    res.type("json").send({ method: "PUT", username: username, user: newUser });
  })
  .delete("/:username", (req, res) => {
    // TODO delete user with <username>
    const username = req.params.username;
    res.type("json").send({ method: "DELETE", username: username });
  });

module.exports = router;
