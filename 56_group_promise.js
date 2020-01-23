Using Fetch Promise to Communicate with API

//promises to communicate with ouside services
//asycronis behavior --ability to call api without stopping the api for the data flow
//store in a const variable

//each console log with print out in the JS console----->
//Starting fetch call
//after fetch call
//promise>
//after program has run

console.log('Starting fetch call');                                                                  // console log for starting the fetch call
const postsPromise = fetch('https://api.dailysmarty.com/posts')        //created const variable called post promise-next call fetch(built in promise gives a promise back) one arg the api
console.log('After fetch call');                                                                        // then console log after the fetch call
console.log(postsPromise);                                                                           // then console log the actual fetch call
console.log('After program has run');                                                         // then console log the After program runs

postsPromise                                         
    .then(data => data.json())                                             // .then(expects) data with an arrow function now say data.json--which converts the data into json data
    .then(data => {                                                                 // now add a then data with an arrow function to get to posts now
        data.posts.forEach((item) => {                                 // now say data.posts(parsing json data-because there was a post object) now use a forEach loop which takes the item which we iterate over
            console.log(item.title);                                          // now console log the item.title(access to the array which has a title-iterating over above)
        });                                
    })
    .catch((err) => {                                                         // this part is for if it gets rejected and we need to pass in the error
        console.log(err);                                                    // just console log what ever the error is here
    })
Gravatar for marineepo@gmail.com
Benjamin NicklausDecember 5th 2019 5:11:05 pm
GROUP PROMISES TOGETHER using Promise.all


const greeting = new Promise((resolve, reject) =>{                                                 //first promise is const greting new Promise add resolve and reject arrow function
    resolve('Hi there');                                                                                                         //it works hi there
    reject('Oops, bad greeting');                                                                                      //doesn't work oops bad greeting
  });
  
  const updateAccount = new Promise((resolve, reject) => {                                 //updateAccount promise
    resolve('Updating last login...');                                                                                  //it works
    reject('Error updating account with login.');                                                         //doesn't work
  });
                                                                                                                                              //process web or mobile app greeting example for login above --rendering out a greeting to user

  const loginActivities = Promise.all([greeting, updateAccount]);                      // loginActivites set it equal to Promise.all and pass in an array of promises(greeting and updateAccount)
  
  loginActivities.then(res => {                                       //iterate over above-call then directly on it(promise all returns a promise itself) then(res)response arrow function-returns data for that promise
    res.forEach(activity => {                                            // the res then call for each on it activity then pass the arrow function
      console.log(activity);                                               //now you have access to it so console log it and call activity
    })
  })

  //foreach above gives you ability to iterate of the array
  //res data we get back-contains the array
  //activity is the iteration variable