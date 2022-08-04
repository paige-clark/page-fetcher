/*
INTAKE: a URL, a local file path via console arguments
OUTPUT: It should download the resource at the URL to the local path on your machine.
        Upon completion, it should print out a message like:
        
        Downloaded and saved 1235 bytes to ./index.html.

TIPS:
- Install and use the request library to make the HTTP request (We know this library is
  deprecated but it is still ok to use for our purposes.)
- Use Node's fs (file system) module to write the file
- Use the callback based approach we've been learning so far
- Do not use the pipe function
- Do not use synchronous functions (see warning above)
*/

/*
ASYNC TASK 1
You need to make an http request and wait for the response.
      ASYNC TASK 2
      After the http request is complete, you need to take the data you receive and write
      it to a file in your local filesystem
            ASYNC TASK 3
            Once it's written, read the size.
*/

//                                                                             [0]                    [1]
// args[0] is URL, args [1] is location to save at: node fetcher.js http://www.example.edu/ ./fetch-into/index.html
const args = process.argv.slice(2);
const fs = require('fs');
const content = 'Some content!';
const request = require('request');

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
    }
    if (!err) {
      fs.stat(args[1], (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to: ${args[1]}`)
        }
      });
    }
    // file written successfully
  });
  // file read successfully
});