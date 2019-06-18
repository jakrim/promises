var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('getGitHubProfileAsync');
var pluckFirstLineFromFileAsync = require('pluckFirstLineFromFileAsync');
Promise.promisifyAll(fs);

/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  fs.readFile;

  var nodeStyle = require('./callbackReview.js');
  var pluckFirstLineFromFileAsync = Promise.promisify(
    nodeStyle.pluckFirstLineFromFile
  );
  var getStatusCodeAsync = Promise.promisify(nodeStyle.getStatusCode);
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
