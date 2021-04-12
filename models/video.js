const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

let videoSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },

}),

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;