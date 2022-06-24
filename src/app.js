require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {addMovie, listMovie, updateMovie, delMovie} = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to database from yargs input
        await addMovie({
            title: yargsObj.title,
            actor: yargsObj.actor
        });
    } else if (yargsObj.list) {
        //find movies
        await listMovie();
    } else if (yargsObj.update) {
        //updates movies
        await updateMovie({
            title: yargsObj.title,
            newTitle: yargsObj.newTitle
        });
    } else if (yargsObj.delete) {
        //deletes movies
        await delMovie({
            title: yargsObj.title
        });
    } else {
        console.log("Incorrect Command");
    }
    await mongoose.disconnect();
}

app(yargs.argv)
