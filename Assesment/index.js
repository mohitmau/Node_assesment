// creating array 

let festivals = ["Gai Jatra", "Dashain", "Tihar", "Indrayeni Jatra", "BaghBhairav Jatra"];

// creating promise

let promiseFestivalList = (festivals) => {
    return new Promise((resolve, reject) => {
        if (festivals.length > 0){
            resolve(festivals);
        }
        else{
            reject("No any data are found.");
        }
    })
};

// implementing promise using .then and .catch

promiseFestivalList(festivals).then( result => {
    console.log('The names in data are: ');
    let time = 1000;
    result.forEach((k,i)=>{    // k is result and i is index
        setTimeout(()=>{
            console.log(i+1 + ')'+ '  ' + k);  
        }, time);
        time += 2000;
    })
}).catch(error => {
    console.log(error);
});

// implementing promise using async and await

let async_await_festival_list = async (festivals) => {
    try {
        let readArray = await promiseFestivalList(festivals);
        console.log('Using async and await...');
        let time = 1000;
        readArray.forEach((k,i)=>{
            setTimeout(()=>{
                console.log(i+1 + '-'+ '  ' + k);
            }, time);
            time += 3000;
        })
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }  
};

async_await_festival_list(festivals);

