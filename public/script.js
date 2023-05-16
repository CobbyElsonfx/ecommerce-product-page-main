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
      numberOfItems = numberOfItems + buttonValue
      const costOfSneakers = numberOfItems * 125
      if(numberOfItems > 0){
        $(".cartItems").removeClass("hidden")
        $("#costOfItems").text(costOfSneakers)
        $("#numberOfitems").text(numberOfItems)
        $("#cartValue").text(numberOfItems)
        console.log(numberOfItems, costOfSneakers)
        //set the emptyCartText to hidden 
        $(".emptyCartText").addClass("hidden")  

      }
      //render this if the value of cart is less than 1 which means it is empty
      if(numberOfItems == 0){
        // var $div = $("<div>")
        // var $p = $("<p>",{
        //   "class": "text-center font-bold text-darkGrayishBlue",
        //   text :"Your cart is empty" 
        // })
        // $div.append($p)
        // console.log("running")
        // $(".cartContent").append($div)
        $(".emptyCartText").addClass("hidden")  

      }
        //set the button to 0 when clicked
      buttonValue = 0
      $("#innerNum").text(buttonValue)
    })

    //delete cart items
    $("#deleteCartItems").click(()=>{
      console.log("clicked delte")
      $(".cartItems").addClass("hidden")
      $(".emptyCartText").removeClass("hidden")
      numberOfItems = 0  
      $("#cartValue").text(numberOfItems)
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