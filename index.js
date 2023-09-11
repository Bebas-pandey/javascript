// // console.log(document.body)
// // // //getElementById example
// // const heading = document.getElementById("heading");
// // console.log(heading)
// // // heading.innerHTML="<b><i><u>bebas Pandey</u></i></b>"

// // //getElementByClassName example

// // // const listItems= document.getElementsByName("list-items")
// // // console.log(listItems)

// // // const queryItems= document.querySelector("li")
// // // console.log(queryItems)

// // console.log(document.querySelector("#container ul li:last-child").textContent)

// const ulOne = document.querySelector('ul');
// const liitems = document.createElement('li');
// ulOne.append(liitems);
// liitems.setAttribute("class", "list-items");
// liitems.innerText = "hulk";
// const ul = document.querySelector("#container ul");
// const movies = ["war", "oppenheimer", "kgf", "Beast", "puspa"]
// movies.forEach(moviename => {
//     const liitem = document.createElement('li');
//     liitem.className = "list-items";
//     liitem.innerText = moviename;
//     ul.append(liitem);
// })

// const c = document.querySelectorAll(".list-items")
// //console.log(c.style.color="yellow")
// //colors.style.color= "yellow"
// for (let i = 0; i < c.length; i++) {
//     if (i % 2 === 0) {
//         c[i].style.backgroundColor = "black";
//         c[i].style.color = "white"
//     } else {
//         c[i].style.backgroundColor = "white";
//         c[i].style.color = "black"
 
//     }
// }

// const showimagebtn=document.querySelector(".show-image");
// const hideimagebtn=document.querySelector(".hide-image");
// const imageinfo=document.querySelector(".image-details");

// function showimagefunction(){
//     if(imageinfo.classList.contains("image-details")){
//         imageinfo.classList.remove("hide")
//     }


// }
// showimagebtn.addEventListener("click",showimagefunction)


// function hideimagefunction(){
//     if(imageinfo.classList.contains("image-details")){
//         imageinfo.classList.add("hide")
//     }

// }
// hideimagebtn.addEventListener("click",hideimagefunction)



// const seeMoreLink = document.getElementById("see-more");
// const additionalContent = document.querySelector(".more-text");
// function dheraiText() {
//   if (additionalContent.style.display === "none") {
//     additionalContent.style.display = "initial";
//     seeMoreLink.textContent = "see less";
//   } else {
//     additionalContent.style.display = "none";
//     seeMoreLink.textContent = "see more";
//   }
// }

// seeMoreLink.addEventListener("click", dheraiText);

const football=document.querySelector("#Football");
const volleyball=document.querySelector("#Volleyball");
const Tennis=document.querySelector("#Tennis");
const Basketball=document.querySelector("#Basketball");
const Cricketball=document.querySelector("#Cricketball");
const message = document.querySelector('#message');
const sport=[];

function showSelectedMessage(e){
    const selectedValue=e.target.id;
    sport.push(selectedValue);
    const target=e.target;
    target.style.backgroundColor="lightgray";
    target.style.color="black";
    for(let i=0; i<= sport.length; i++){
        message.innerHTML=`${sport} is selected`;
    }

}
football.addEventListener('click',showSelectedMessage);
Basketball.addEventListener('click',showSelectedMessage);
Tennis.addEventListener('click',showSelectedMessage);
Cricketball.addEventListener('click',showSelectedMessage);
Volleyball.addEventListener('click',showSelectedMessage);
















