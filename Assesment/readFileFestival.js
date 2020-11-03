let fs = require('fs');

let promiseReadFile = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err,data) => {
            if(err){
                reject(err);
        }
            else{
                resolve(data);
            }
        })
    });
}

promiseReadFile('./test_file/festival.txt', 'utf8').then(data => {
    // let parsedData = JSON.parse(data);
    // parsedData.forEach((k,i) => {
    //     console.log(i+1 + '.'+ '  ' + k)
    // });
    console.log("File content: ", data);
}).catch(err => {
    console.log("Error: ", err);
})

// module.exports = {
//     promiseReadFile
// }