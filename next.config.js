const withPlugins = require('next-compose-plugins');

const config = {images: {
    loader: "imgix",
    path: "/",
}};

module.exports = withPlugins([], config);
