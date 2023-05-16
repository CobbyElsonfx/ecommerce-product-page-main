$(document).ready(()=> {
  let numberOfItems = 0
  console.log(numberOfItems, "total")
  let buttonValue = parseInt($("#clickButton").val())
  
    $("#minus").click(()=>{
        buttonValue --
        if(buttonValue < 0){
          buttonValue = 0
        }
        $("#clickButton").val(buttonValue)
        $("#innerNum").text(buttonValue)

    })

    $("#addVal").click(()=>{
        buttonValue ++
        $("#clickButton").val(buttonValue)
        $("#innerNum").text(buttonValue)
    })

    //adding to cart functionality
    $("#addtoCart").click(()=>{
      if(buttonValue > 0){
        $(".cartItems").removeClass("hidden")
        numberOfItems = numberOfItems + buttonValue
        const costOfSneakers = numberOfItems * 125
        $("#costOfItems").text(costOfSneakers)
        $("#numberOfitems").text(numberOfItems)
        console.log(numberOfItems, costOfSneakers)
      }
      if(buttonValue < 1){
        $(".fallbackCartStatus").removeClass("hidden")
      }
     

      buttonValue = 0
      $("#innerNum").text(buttonValue)
      

    })




    // cartbasket toggle
    $("#cart").click(()=>{
      $("#cartBasket").toggle()
    })
})


function openNav () {
  document.getElementById("mySideNav").style.width = "220px"

}

const closeNav = ()=>{
  document.getElementById("mySideNav").style.width = "0px"
}







// lightbox 
// Get all the thumbnail images
const thumbnails = document.querySelectorAll('.desktop-thumbnail img');

// Get the main image element
const mainImage = document.getElementById('desktop-image');

// Iterate over all the thumbnials and attach a click event  listener to each 
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    // Update the main image source with the clicked thumbnail's source
    mainImage.src = thumbnail.src;

    // Remove the active class from all thumbnails
    thumbnails.forEach((thumb) => {
      thumb.parentNode.classList.remove('active');
    });

    // Add the active class to the clicked thumbnail's parent label
    thumbnail.parentNode.classList.add('active');
  });
});



// //cart update
// const cartButton = document.getElementById("addtoCart")
// const cartContent = document.getElementById("cartContent")
// const cartImage = document.getElementById("cartImage")
// const numberOfItems = document.getElementById("costOfItems")
// let innerNum = document.getElementById("innerNum").textContent

// console.log(numberOfItems.textContent, "here we og")

// let temp = 0

// cartButton.addEventListener("click", ()=>{
//   //Get the value of the button element
//   const temp = innerNum
//   //multiply the innerNum by 125 when the button is clicked
//   const cost = parseInt(temp) * 125

//   console.log(cost)
//   //select the current selected image 
//   const selectedImage = document.querySelector('.desktop-thumbnail input[name="desktop-thumbnail-select"]:checked')
//   if(selectedImage){
//     cartImage.src = selectedImage.parentNode.querySelectorAll("img")[1].src
//   }

// })