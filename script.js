/* toggle navbar */
let arrDataPrev = []
let arrImgId = []
let nav = document.querySelector("nav")
let bars = document.querySelectorAll("#bars")
let bg = document.querySelector(".bg")

function app() {

function toggleMenu() {
  bars.forEach(el => {
    el.addEventListener("click", () => {
      nav.classList.toggle("active")
      bg.style.display = "block"

      bg.addEventListener("click", () => {
        nav.classList.remove("active")
        bg.style.display = "none"
      })
    })
  })
}

window.addEventListener("load", toggleMenu)


/* Integrate the random jokes */
let line = document.querySelector(".lines")
let jokeSetup = document.querySelector(".jokes-setup")
let img = document.querySelector(".main-jokes")
let time = document.querySelector(".time")
let nextBtn = document.querySelector(".next")
let copyBtn = document.querySelector(".copy")
let prevBtn = document.querySelector(".prev")
let cateText = document.querySelector(".cate-text")
  let interval;
/*fetching the jokes */
  async function dadJokes() {
    let proPage = document.querySelector(".pro-page-container")

    
    proPage.style.display = 'none'
  clearInterval(interval)
  let count = 7
  line.style.width = '0%'
  try{
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      "Accept": "application/json"
    }
  })
  const data = await res.json()
  const id = data.id
  cateText.innerHTML = "dad jokes"
  console.log(id)
  arrDataPrev.push(data.joke)
  arrImgId.push(id)
  jokeSetup.innerText = data.joke
  img.src = `https://icanhazdadjoke.com/j/${id}.png`
  
  
    interval = setInterval(() => {

         count--

         if(count >= 0){
           line.style.width = `${100 - (count * (100 / 7))}%`
           if(count < 10){
           time.innerText = `00:0${count}`
           
           }
           else{
             time.innerText = `00:${count}`
           }
           
         }
         else{
           line.style.width = '0%'
           count = 7
           if(count < 10){

           time.innerText = `00:0${count++}`

           }
           else{
             time.innerText = `00:${count++}`
           }
          
          
          
          /*generating more jokes */
         async function generateMore(){
           let res2 = await fetch("https://icanhazdadjoke.com/", {

    headers: {

      "Accept": "application/json"
    }
           })
           /*loading the joke image */
  let data2 = await res2.json()
  let id2 = data2.id
  jokeSetup.innerText = data2.joke
           img.src = `https://icanhazdadjoke.com/j/${id2}.png`
  
         }
         generateMore()
         }
       },1000)
       
  }
  catch(e){
    console.log(e)
  }
  
 
 
  nextBtn.addEventListener("click", () => {

    /*next btn */
async function goNext(){
  let res3 = await fetch("https://icanhazdadjoke.com/",{
    headers: {

      "Accept": "application/json"
    }
  })
  let data3 = await res3.json()


  let id3 = data3.id
  /* storing the joke to enable easy access with the prev btn*/
  
 arrDataPrev.push(data3.joke)
 arrImgId.push(id3)
 
   jokeSetup.innerText = data3.joke
           img.src = `https://icanhazdadjoke.com/j/${id3}.png`
   
   line.style.width = '0%'

           count = 7

           if(count < 10){

           time.innerText = `00:0${count++}`
   
}
else{

             time.innerText = `00:${count++}`

           }
}
goNext()
})


/* prev btn */
prevBtn.addEventListener("click", () => {

let leng = arrDataPrev.length;

  let imgId = arrImgId.length

 
    if (leng >= 0){
      
        leng--;
        console.log(arrDataPrev[leng]);
        jokeSetup.innerText = arrDataPrev[leng]
        img.src = `https://icanhazdadjoke.com/j/${arrImgId[leng]}.png`
        console.log(leng)
        arrDataPrev.pop();
        
 
 
   line.style.width = '0%'

           count = 7

           if(count < 10){

           time.innerText = `00:0${count++}`
   
}
}
else{

             time.innerText = `00:${count++}`
             
             

           }
    
})

/* Creating the copy button*/
copyBtn.addEventListener("click", () =>{
const range = document.createRange()
range.selectNode(jokeSetup)
window.getSelection().addRange(range)
document.execCommand("copy")
window.getSelection().removeAllRanges()

/*alert box pops out */

let alertBox = document.querySelector(".alert")
let alertLine = document.querySelector(".alert-line")
let delay = 2000
alertBox.classList.add("active")
alertLine.style.width = "100%"
let count = 0

setInterval(() => {
  count++
  if (count <= 1) {
    alertLine.style.width = `${100 - (count * (100 / 1))}%`
  }
}, delay)

setTimeout(() => {
  alertBox.classList.remove("active")
}, delay)

})


}

window.addEventListener("load", dadJokes)


/* quotes catergories arrays */

let quoteArr = [
  "alone",
  "amazing",
  "anger",
  "beauty",
  "birthday",
  "communication",
  "cool",
  "courage",
  "dating",
  "death",
  "dreams",
  "education",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "happiness",
  "health",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  " mom",
  " money",
  "morning",
  "movies",
  "success"  
]

let jokesArr = [
  "Dad jokes",
  "Programming Jokes",
  "General Jokes"
]

let faceitArr = ["breaking bad"]
let quoteLinks = document.querySelectorAll(".quotes-link")
/* creating the quotes api */

function responsiveQuotes() {

  let lineqot = document.querySelector(".line-qot")
  let jokeSetupqot = document.querySelector(".jokes-setup-qot")
  let imgqot = document.querySelector("img-qot")
  let timeqot = document.querySelector(".time-qot")
  let nextBtnqot = document.querySelector(".next-qot")
  let copyBtnqot = document.querySelector(".copy-qot")
  let prevBtnqot = document.querySelector(".prev-qot")
  let displayContainer = document.querySelector(".display-container")
  let inAppContainer = document.querySelector(".in-page-container")
  let cateText = document.querySelector(".cate-text-qot")
  const delay = 1000
  let timer = 10
  let interval

  quoteLinks.forEach((el,index) => {
    el.addEventListener("click", () => {
     b()
     lineMove()
     let arrDataPrev2 = []
      nav.classList.remove("active");
      bg.style.display = 'none';
      displayContainer.style.display = 'none';
      inAppContainer.style.display = 'block';
  clearInterval(interval)



      timer = 7


      console.log(timer);
      
  
  async function quoteCategory() {
    try {
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${quoteArr[index]}`, {
        headers: {
          "X-Api-Key": "9FmzFqwAKghSDGbUSB20VA==YUquqy0lsOzdk3Pz"
        }
      })
  
      const datas = await res.json()
      let quoteData = datas[0].quote
     let categories = datas[0].category
      jokeSetupqot.innerHTML = quoteData
      console.log(categories)
      cateText.innerHTML = categories
 
      interval = setInterval(() => {
        timer--
        if (timer >= 0) {
          lineqot.style.width = `${100 - (timer * (100 / 7))}%`
          timeqot.innerHTML = `00:0${timer}`
        }
        else {
  timer = 7
 
  timeqot.innerHTML = `00:0${timer++}`
          
async function nextQuote(){
  try{
   const res2 = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${quoteArr[index]}`, {

        headers: {

          "X-Api-Key": "9FmzFqwAKghSDGbUSB20VA==YUquqy0lsOzdk3Pz"
        }
      })
      const data2 = await res2.json()
      let quoteData2 = data2[0].quote
    
      jokeSetupqot.innerHTML = quoteData2
      console.log(quoteData2);
      
      

  }
  catch(e){
    console.log(e)
  }
        }
        nextQuote()
        }
      },delay)
      
      
      nextBtnqot.addEventListener("click", () => {

     async function nextBtnQuote(){

       let res3 = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${quoteArr[index]}`, {



        headers: {

          "X-Api-Key": "9FmzFqwAKghSDGbUSB20VA==YUquqy0lsOzdk3Pz"
        }
      })
      
      let quoteData3 = await res3.json()
      let category2 = quoteData3[0].category
      let quoteText = quoteData3[0].quote
      
      jokeSetupqot.innerText = quoteText
      cateText.innerText = category2
      
      arrDataPrev2.push(quoteText)
      console.log(arrDataPrev2)
      clearInterval(interval)





      timer = 7
     
     
      interval = setInterval(() => {

        timer--

        if (timer >= 0) {
          lineqot.style.width = `${100 - (timer * (100 / 7))}%`
          timeqot.innerHTML = `00:0${timer}`
        }
        else {
  timer = 7
 
  timeqot.innerHTML = `00:0${timer++}`
          
        }
      }, delay)
     }
     nextBtnQuote()
   })
      
   
      
    prevBtnqot.addEventListener("click", () => {
      let storedQuoteLength = arrDataPrev2.length
      storedQuoteLength--
      if(storedQuoteLength >= 0){
        jokeSetupqot.innerText = arrDataPrev2[storedQuoteLength]
        console.log(arrDataPrev2)
        arrDataPrev2.pop()
        
        clearInterval(interval)
        
      timer = 7
     
     
      interval = setInterval(() => {

        timer--

        if (timer >= 0) {
          lineqot.style.width = `${100 - (timer * (100 / 7))}%`
          timeqot.innerHTML = `00:0${timer}`
        }
        else {
  timer = 7
 
  timeqot.innerHTML = `00:0${timer++}`
          
        }
      }, delay)
      }
    })
      
   copyBtnqot.addEventListener("click", ()=>{
     let range = document.createRange()
     
     range.selectNode(jokeSetupqot)
     window.getSelection().addRange(range)
     document.execCommand("copy")
     window.getSelection().removeAllRanges()
     
     let alertBox = document.querySelector(".alert")

let alertLine = document.querySelector(".alert-line")
alertBox.classList.add("active")
let delay = 2000
     let count = 1
     setInterval(() => {
       
   count--
  if (count <= 1) {
    alertLine.style.width = `${100 - (count * (100 / 1))}%`
  }
}, delay)

setTimeout(() => {
  alertBox.classList.remove("active")
}, delay)

})


   }
      
    
    catch (e) {
      console.log(e);
    }
    
 
   
    
    
    
    
    
    
    
    
    
  
  }
  
  quoteCategory()
      
    })

  })
}
  /* generating dad joke when clicked */
  
  let dadJokesLink = document.querySelector(".dad-jokes")

  dadJokesLink.addEventListener("click", () => {
    let displayContainer = document.querySelector(".display-container")
  let inAppContainer = document.querySelector(".in-page-container")
  let proPage = document.querySelector(".pro-page-container")

    
  proPage.style.display = 'none'
  b()
  lineMove()
    nav.classList.remove("active")
    bg.style.display = 'none';
    displayContainer.style.display = 'block';
    inAppContainer.style.display = 'none';

    let count = 7
    dadJokes()
    console.log('knank');
  })

window.addEventListener("load", responsiveQuotes)

}


let cate = document.querySelector(".cate")
let upAngle = document.querySelector("#up")
cate.addEventListener("click", ()=>{
  cate.classList.toggle("active")
  upAngle.classList.toggle("fa-angle")
})

let otherLinks = document.querySelectorAll(".l")

otherLinks.forEach(el => {
  el.addEventListener("click", () => {
    alert("Function coming soon!!")
    nav.classList.remove("active")
    bg.style.display = 'none'
  })
})

app()
let loaderPage = document.querySelector(".loader")


function b(){
  loaderPage.classList.remove("active")

  loaderPage.style.display = "flex"

  setTimeout(()=>{
    loaderPage.classList.add("active")
    
  }, 1000)
  
  setTimeout(() => {
    app()
    loaderPage.style.display = "none"
  }, 1100)
}
b()

function lineMove(){
let loadLine = document.querySelector(".page-loader")

  loadLine.style.display = "block"

  let counter = 0
  
  setInterval(()=>{
    counter++
    if(counter <= 100){
      loadLine.style.width = `${counter}%`
      console.log(counter)
    }
    else{
      loadLine.style.display = "none"
    }
  }, 2)
}
lineMove()





function pageLoad(){
  
  loaderPage.classList.add("active")
  
  
}
function a(){
  loaderPage.style.display = "none"
  
}
setTimeout(pageLoad, 2000)
setTimeout(a, 3000)