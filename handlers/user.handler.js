"use strict";

const User = require("../models/user.model.js");
const Utility = require("../libs/utility.js");

const UserHandler = (function gameHandlerConstructor() {

  // ########################################################################## //
  // ####  TODO: Check for credentials to perform certain operations like  #### //
  // ####  "DELETE"                                                        #### //
  // ########################################################################## //

  function handleParams(req) {
    var params = {};
    if(Utility.isEmpty(req.query) && Utility.isEmpty(req.body)) {
      params = req.query;
    } else if (Utility.isEmpty(req.query) && req.params) {
      return req.body;
    }
    return params;
  }

  function getUsers(req, res) {
    var params = handleParams(req);
    User.find(params, "username signinDate email nation").exec()
      .then(users => {
        if (!Utility.isEmpty(users)) res.json(users);
        else res.sendStatus(404);
      })
      .catch(err => res.sendStatus(400));
  }

  function getUser(req, res) {
    if(req.params.username) {
      User.find({ username: req.params.username }, "username signinDate email nation").exec()
        .then(user => {
          if(!Utility.isEmpty(user)) res.json(user);
          else res.sendStatus(404);
        })
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function postUser(req, res) {
    if(!Utility.isEmpty(req.body)) {
      User.create(req.body)
        .then(creationResult => res.json(creationResult))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function patchUsers(req, res) {
    const [query, fields] = req.body;
    if(!Utility.isEmpty(query) && !Utility.isEmpty(fields)) {
      User.updateMany(query, fields).exec()
        .then(result => res.json(result)) // COMBAK: confront result.n and result.nModified
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function patchUser(req, res) {
    const [username, fields] = [req.params.username, req.body];
    if(username && !Utility.isEmpty(fields)) {
      User.updateOne({ username: username }, fields).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function putUser(req, res) {
    const [query, newUser] = req.body;
    if(!Utility.isEmpty(query) && !Utility.isEmpty(newUser)) {
      User.replaceOne(query, newUser).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function putUserByUsername(req, res) {
    const [username, newUser] = [req.params.username, req.body];
    if (username && !Utility.isEmpty(newUser)) {
      User.replaceOne({ username: username }, newUser).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  function deleteUser(req, res) {
    if(req.params.username) {
      User.deleteOne({ username: req.params.username }).exec()
        .then(result => res.json(result))
        .catch(err => res.sendStatus(400));
    } else res.sendStatus(400);
  }

  return {
    getUsers, getUser, postUser, patchUsers, patchUser,
    putUser, putUserByUsername, deleteUser
  };
}());

module.exports = UserHandler;
