const fs = require('fs')

module.exports.existWithOneException = () => {
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

            for(let i = 0; i < patternsArray.length-1; i++) {
                let n = patternsArray[i].split('')
                console.log(n)
                for(let j = 0; j < inputArray.length-1; j++) {
                    let m = inputArray[j].split('')
                    console.log(m)
                    let result = []
                    if(patternsArray[i].length > (inputArray[j].length+1) || patternsArray[i].length < (inputArray[j].length-1)) {
                        console.log('нет совпадений')
                    } else if(patternsArray[i].length <= (inputArray[j].length+1)) {
                    
                        for(let x = 0; x < inputArray[j].length; x++) {
                        
                           result = n.filter(item => item===m[x])
                                                     
                            console.log(result)
                            
                        }
                    }
                    
                }
                
                
            } 
           
        })
    })
 
}


//             let mistakeCounter = 0



// existWithOneExeption()