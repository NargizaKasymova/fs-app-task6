const fs = require('fs')

module.exports.existInThisLine = () => {
    readInput =  fs.readFile('../fs-app/text/input.txt', 'utf8', (err, data) => {
        if(err) {
            throw err
        }
        inputArray = data.split('\r\n')
        
        readPatterns =  fs.readFile('../fs-app/text/patterns.txt', 'utf8', (err, content) => {
            if(err) {
                throw err
            }
            patternsArray = content.split('\r\n')
            
            for(let i = 0; i < patternsArray.length - 1; i++) {
                for(let j = 0; j < inputArray.length - 1; j++) {
                                
                    if(patternsArray[i]===inputArray[j]) {
                        
                        if(i===j){
                            console.log(`совпадение по строке ${j+1}:\n${inputArray[j]}`)
                        }  else {
                            return console.log(`нет совпадений по строкам`)}
                    } 
                } 
            }
        
        })
    })
 
}

// existInThisLine()