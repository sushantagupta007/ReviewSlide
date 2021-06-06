// Review

const reviews = [

    {
        id: 1,
        img: "./person-1.jpeg",
        author: "Sushanta",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"
    },
    {
        id: 2,
        img: "./person-1.jpeg",
        author: "Susan",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"

    },
    {
        id: 3,
        img: "./person-1.jpeg",
        author: "Susanaa",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"

    }, 
    {
        id: 4,
        img: "./person-1.jpeg",
        author: "Shanta",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"
    },
    {
        id: 5,
        img: "./person-1.jpeg",
        author: "dfdfs",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"
    },
    {
        id: 6,
        img: "./person-1.jpeg",
        author: "Shantasffdf",
        job: "UX-designer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe vel repella"
    },

]

// Selection
const image = document.querySelector('#person-img'); 
const author = document.querySelector('#author'); 
const job = document.querySelector('#job'); 
const info  = document.querySelector('#info'); 
const previousButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn'); 
const randButton = document.querySelector('.random-btn'); 

// Initialization
let currentItem = 0; 

// Function

const showPerson = () =>{
    const item = reviews[currentItem]
    image.src= item.img;
    author.textContent= item.author;
    job.textContent= item.job;
    info.textContent= item.info;
     
}


window.addEventListener("DOMContentLoaded", ()=>{
    showPerson(); 
})

nextButton.addEventListener('click',()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0; 
    }
    showPerson(); 
    console.log(currentItem)
})


previousButton.addEventListener('click',()=>{
    currentItem--;
    if(currentItem<0) {
        currentItem=reviews.length-1; 
    }
    showPerson(); 
    console.log(currentItem)
})

randButton.addEventListener('click',()=>{
    const itemNumber= reviews.length-1; 
    currentItem= Math.floor(Math.random()*itemNumber); 
    showPerson();
    console.log(currentItem); 

})

Math.random