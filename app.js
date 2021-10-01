const express = require('express')
const app = express()
app.use(express.json())


const fs = require('fs')
const { existInPatterns } = require('../fs-app/controllers/1. existSimple')
const { existInThisLine } = require('../fs-app/controllers/2. existInLine')
const { existWithOneException } = require('../fs-app/controllers/3. existWithException')


const PORT = 5050
                                    //app запускается через npm run dev || npm run start  || node app.js || nodemon app.js
async function checkExisting() {
    try{
        await existInPatterns() //1-функция работает правильно
        
        await existInThisLine()  //2-функция работает правильно

        // await existWithOneException() // работает неправильно (и через 4 вложения пыталась, и через фильтр - не получилось)
        
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
