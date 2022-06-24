const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovie = async () => {
    try {
        const response = await Movie.find();
        console.log(response)
    } catch {
        console.log(error)
    };
};

exports.updateMovie = async (movieObj) => {
    try {
        const response = await Movie.findOneAndUpdate({
                title: movieObj.title
            }, {
                $set: {
                    title: movieObj.newTitle,
                }
            }, {
                new: true
            }
        );
        console.log(response.modifiedCount > 0);
    } catch (error) {
        console.log(error)
    }
};

exports.delMovie = async (movieObj) => {
    try {
        const response = await Movie.deleteOne(movieObj);
        console.log(response.deletedCount > 0);
    } catch (error) {
        console.log(error)
    }
};
