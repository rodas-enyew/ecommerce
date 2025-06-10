// Import express
const express = require('express');
const fetch = require("node-fetch")// to fetch from external API
require('dotenv').config(); // loads the .env file

const{ getProfile } = require("@yayawallet/node-sdk");

//make a profile req
getProfile().then((profile)=> {
    console.log("profile:", profile);
})
.catch((error)=> {
    console.error("Error fetching user profile:")
})

async function getProfileInformation(){
    try {
        const profile= await getProfile();
        console.log(profile);
    } catch (error){
        console.log("Errpr fetching user profile:", error);
    }
}


const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

