# Unit-7-Lesson-0-1

## Unit 0 Questions 

### Question 1 

After running the file, an empty object is returned. An empty object is returned because it’s trying to get information from the second file `lab.js` but there’s nothing in it.

### Question 2 

Now once we run the file, the empty object we got before is now filled with the key-value pairs that we coded in the `lab.js` file. This is because now it’s actually getting data from the second file.

### Question 3 

This part of the module.exports wasn’t undefined because its value is the invocation of the `getFavoriteNumber` function.

### Question 4  

Prediction - I predict that I will see the console log “this is random” multiple times.

What actually happened is that “this is random” was only logged once. This is because once it hits the first `require`, the module is then cached so any other call to it will be ignored.

### Question 5  

The client is my browser and the server is my local machine. My browser is requesting data from the server I made and the server I made is sending back a response.

## Unit 1 Questions

### Question 0 

Status codes are important because they describe the responses we get from our requests

### Question 1

The URI would be the name of what you’re looking for and the URL is where you can find it. An example would be that my name is a URI and my home is my URL.

### Question 2

Query params are how we can narrow specific searches in our URLs. Within our own applications, we use query parameters to manipulate static parts of our website.
