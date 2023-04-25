const express = require("express")
const Router = express.Router()

const { getProfiles, postProfile, updateProfile, deleteProfile, oneProfile, greaterProfile} = require("../Controller/controller")



Router.route("/").get(getProfiles).post(postProfile)
Router.route("/:id").put(updateProfile).delete(deleteProfile).get(oneProfile)
Router.route("/ss1/list").get(greaterProfile)


module.exports = { Router }