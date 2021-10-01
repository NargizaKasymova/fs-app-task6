const express = require('express')
const app = express()
app.use(express.json())


const fs = require('fs')
const { existInPatterns } = require('../fs-app/controllers/1. existSimple')
const { existInThisLine } = require('../fs-app/controllers/2. existInLine')

const PORT = 5050

async function checkExisting() {
    try{
        await existInPatterns() 
        
        await existInThisLine()
        
    } catch(e){
        console.log(e)
    }
}
checkExisting()

async function startApp() {
    try{
        // await existInPatterns()
        // await existInThisLine()
        app.listen(PORT, function() {
            console.log('App has been started ' + PORT)
        })
    } catch(e){
        console.log(e)
    }
}
startApp()
