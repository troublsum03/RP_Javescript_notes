INSTAGRAM IMAGE SELECTOR

//how to pull images from instgram
//how to grab instgram url's from  page
//inspect the images
//find class FFVAD to image iteself-class on images

const images = document.querySelectorAll('.FFVAD')   //returns all images in node list

//click second image-scroll down to src-
//we need to traverse throuh all of them

images.forEach(img => console.log(img.src))          //for each takes a function

                                                     //now to create an empty array
let imageUrlArray = [];                              // empty array-set to empty array

images.forEach(img => imageUrlArray.push(img.src));  //gives an array format-.push   will now be all filled up with the images
                                                     //now type 

copy(imageUrlArray)                                  //it takes images and places in an array format