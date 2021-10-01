const fs = require('fs')

module.exports.existInPatterns = () => {
    readInput =  fs.readFile('../fs-app/text/input.txt', 'utf8', (err, data) => {
        if(err) {
            throw err
        }
        inputArray = data.split('\r\n')
        // console.log(inputArray)
        readPatterns =  fs.readFile('../fs-app/text/patterns.txt', 'utf8', (err, content) => {
            if(err) {
                throw err
            }
            patternsArray = content.split('\r\n')
            // console.log(patternsArray)
            for(let i = 0; i < inputArray.length - 1; i++) {
                if(patternsArray.includes(inputArray[i])) {
                    console.log(`"${inputArray[i]}" совпало с шаблоном`)
                } else {
                    console.log(`нет совпадений со строкой "${inputArray[i]}""`)
                } 
            }
        
        })
    })
 
}

// existInPatterns()