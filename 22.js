/*
let use={
    name:"soahil",
    id:"sohail40_",
    password:"sohail123"
}

let username=prompt("enter your name!")
let userid=prompt("enter your id!")
let userpassword=prompt("enter your password")

const test =(n,i,p)=>{
    return{
        name:n,
        id:i,
        password:p
    }
}
console.log(use)
console.log(test(username,userid,userpassword))
*/
/*
let name = document.querySelector("#naam");
   
let col = setInterval(()=>{
    name.classList.toggle("name")
},70)

col;
let num1 ="1";
let num2 =1;
let sum =num1+num2;
let ab =(x,y)=>{
    return x==y? "true":"false"
}
alert("type of num1 "+typeof(num1));
alert("sum "+sum)
alert("type of num2 "+typeof(num2))
alert(ab(num1,num2))
*/


function loadScript(src,callback){
  var script = document.createElement("script");
  script.src = src;
  script.onload = function(){
     callback(null,src)
  }
  script.onerror = function(){
     callback(new Error("Script not loaded"))
  }
  document.body.appendChild(script)
}
/*
function hello(error,src){
  if(error){
    console.log("Script got error " + error);
    return;
  }
  console.log("script loaded with "+src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)
*/

console.time()

function loadSheet(src,callback){
  let link= document.createElement("link");
  link.href = src;
  link.rel = "stylesheet"
  link.type = "text/css"
  link.onload = function(){
    callback(null,src)
  }
  link.onerror = function(){
     callback(new Error("Src Not Loaded"))
  }
  document.head.prepend(link)
}

loadSheet("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",function css(error,src){
  if(error){
    console.log("Got some error in src "+src)
    return;
  }
  console.log("Src loaded with src "+src)
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function css(error,src){
  if(error){
    console.log("Got some error in src "+src)
    return;
  }
  console.log("Src loaded with src "+src)
  })
});
/*
console.timeEnd()
let moviesApi = "https://pokeapi.co/api/v2/pokemon/ditto";
let url = document.getElementById("url")
let movie = fetch(moviesApi)
async function fetching(){ 
  let result = await movie;
  let data = await result.json();
  console.log(data.game_indices[5].version)
  console.log(data.game_indices[5].version.name)
  url.href = data.game_indices[5].version.url
  console.log(data.game_indices[5].game_index)
}
fetching();
// FOOD API REQUEST FETCHING
let ur = fetch("https://world.openfoodfacts.org/api/v3/product");     
const food = async() =>{
     let respons = await ur;
     let data =await respons.json();
  console.log(data)
}
food();
*//*
const car = async()=>{
  let ul = fetch("https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459")
  let res = await ul;
  let daa = await res.json();
  console.log(daa)
}
car();

class AadharUpdateForm{
 constructor(name,AadharNo,PhoneNo,Document){
    this.name = name;
    this.aadharno = AadharNo;
    this.phoneno = PhoneNo;
    this.supportingdocument = Document;
  }
  submit(name,AadharNo,PhoneNo,Document){
    this.name = name;
    console.log(`Your Resquest For Aadhar Upadation With the Name Of ${this.name} are Succesfully Generated!`)
  }
}
let sohailAadharUpdateForm =new AadharUpdateForm("sohail",2929,299229,"pan")
sohailAadharUpdateForm.submit("sohail",123,20303,'voter')
console.log(sohailAadharUpdateForm.valueOf())
console.log(sohailAadharUpdateForm.toString())

let obj1 ={
  name: "sohail",
  id: "sohail40"
}
console.log(obj1.prototype)
console.log(obj1)
obj1.__proto__ ={
  ph: 91881,
  run:()=>{
    alert("I am running!")
  }
}
obj1.run();
console.log(obj1.__proto__)
*/
let img_container1 = document.querySelector("#img_container1")
let img_container2 = document.querySelector("#img_container2")
let img = document.querySelector("#image")
let video = document.querySelector("#video")
let heading = document.querySelector("#heading")
let paragraph = document.querySelector("#para")
let date = document.querySelector("#date")
//let dogApi = "https://dog.ceo/api/breeds/image/random";
//let dogApi = "https://picsum.photos/200/300";
//let dogApi = "https://source.unsplash.com/random";
//let dogApi = "https://randomfox.ca/floof/";
let dogApi = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
async function load(){
let fetching =await fetch(dogApi);
let response = await fetching.json();
let data =await response;
  console.log(data);
  if(data.media_type == "image"){
    img_container2.style="display:none;"
    img.src = data.url;
  }
  if(data.media_type == "video"){
    img_container1.style="display:none;"
    img_container2.style="display:block; height:300px; width:100%; border:10px double white;"
    video.src = data.url;
  }
  heading.innerHTML = data.title;
  date.innerHTML = data.date;
  paragraph.innerHTML = data.explanation;
  //link.href = await data.link;
  //console.log(data);
 // let newPage =`<h1>${data.title}</h1> <br><br> <img src="${data.url}" `;
 // window.open("",_Blank).document.write(newPage);
console.log(data.media_type == "video")
}
load();
//console.log(data)



