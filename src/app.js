require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const {addMovie} = require("./movie/functions");

const app = async (yargsObj) => {
    if (yargsObj.add) {
        //add movie to database from yargs input
        await addMovie({title: yargsObj.title, actor: yargsObj.actor})
    } else if (yargsObj.list) {
        //find movies
    } else if (yargsObj.update) {
        //updates movies
    } else if (yargsObj.delete) {
        //deletes movies
    } else {
        console.log("Incorrect Command");
    }
}

app(yargs.argv)