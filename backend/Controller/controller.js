const expressHandler = require("express-async-handler")
const Profiles  = require("../db/model")


 
const getProfiles = expressHandler( async( req, res) => {
    const getprofiles = await  Profiles.find();

    if (!getprofiles){
        res.status(404).json({error: "No profiles found"})
    }

    res.status(200).json(getprofiles)
})

const postProfile = expressHandler( async (req, res) => {
    const postprofile = await Profiles.insertMany({
        name: req.body.name,
        classname: req.body.classname,
        school: req.body.school,
        age: req.body.age,
    })

    if (!postprofile){
        res.status(404).json({error: "Error in posting to database"})
    }
    res.status(200).json(postprofile)
})

const updateProfile = expressHandler( async (req, res) => {
    const updateprofile = await Profiles.findByIdAndUpdate( req.params.id, {
        name: req.body.name,
        classname: req.body.classname,
        school: req.body.school,
        age: req.body.age,
    })

    if (!updateprofile){
        res.status(404).json({error: "Error in updating to database"})
    }
    res.status(200).json(updateprofile)
})


const deleteProfile = expressHandler( async (req, res) => {
    const deleteprofile = await Profiles.findByIdAndDelete( req.params.id);
    if (!deleteprofile){
        res.status(404).json({error: "Error in deleting from database"})
    }
    res.status(200).json("Profile Deleted Successful")
})

const oneProfile = expressHandler( async (req, res) => {
    const oneprofile = await Profiles.findById(req.params.id);
    if (!oneprofile){
        res.status(404).json({error: "Error in getting profile from database"})
    }
    res.status(200).json(oneprofile)
});

const greaterProfile = expressHandler( async (req, res) => {
    const greaterprofile = await Profiles.find({classnamename: "SSS 1"});
    if (!greaterprofile){
        res.status(404).json({error: "Error in getting profile from database"})
    }
    res.status(200).json(greaterprofile)
})

module.exports = {
    getProfiles, postProfile, updateProfile, deleteProfile, oneProfile, greaterProfile
}