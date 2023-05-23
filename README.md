# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.




## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot
#### Desktop View
Screenshot 2023-05-18 at 3.27.14 PM![image](https://github.com/CobbyElsonfx/ecommerce-product-page-main/assets/109095646/8310cf35-8e49-4209-98a6-f3457e018cbd)
#### Mobile View
Screenshot 2023-05-18 at 3.40.56 PM![image](https://github.com/CobbyElsonfx/ecommerce-product-page-main/assets/109095646/a0b5cb46-ee39-42f3-8a43-5fa485f9bc90)




### Links
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwindcss
- Jquery


### What I learned


```html
<h1>Some HTML code I'm proud of this code which creates  an ecommerce lighbox where users click on a smaller thumbnail image and it desplays in a larger container above</h1>
<div class="hidden sm:flex flex-col flex-1 items-center gap-8">
                  <!-- Image -->
                  <img src="./images/image-product-1.jpg" role="button"class="w-full max-w-md rounded-2xl cursor-pointer" id="desktop-image"  alt="Main image of the product"/>
                  <!-- Thumbnails -->
                  <form id="desktop-image-thumbnails" class="flex gap-8 max-w-md">
                    <label for="desktop-thumbnail-1" class="desktop-thumbnail active">
                      <input type="radio" name="desktop-thumbnail-select"  id="desktop-thumbnail-1" value="1"  class="hidden-radio" checked />
                      <img   src="./images/image-product-1.jpg"  alt="Image 1 of product" class="cursor-pointer mix-blend-lighten brightness-110"/>
                    </label>

                    <label for="desktop-thumbnail-2" class="desktop-thumbnail">
                      <input type="radio" name="desktop-thumbnail-select"id="desktop-thumbnail-2" value="2" class="hidden-radio"/>
                      <img  src="./images/image-product-2.jpg"  alt="Image 2 of product" class="cursor-pointer mix-blend-lighten brightness-110"/>
                    </label>

                    <label for="desktop-thumbnail-3" class="desktop-thumbnail">
                      <input type="radio" name="desktop-thumbnail-select" id="desktop-thumbnail-3" value="3" class="hidden-radio"  />
                      <img src="./images/image-product-3.jpg" alt="Image 3 of product" class="cursor-pointer mix-blend-lighten brightness-110" />
                    </label>

                    <label for="desktop-thumbnail-4" class="desktop-thumbnail">
                      <input type="radio" name="desktop-thumbnail-select" id="desktop-thumbnail-4" value="4"   class="hidden-radio" />
                      <img src="./images/image-product-4.jpg"  alt="Image 4 of product" class="cursor-pointer mix-blend-lighten brightness-110"/>
                    </label>
                  </form>
                </div>
          </div>
```

```
* This Jquery code represents the logic behind the addition and removal of items  to the cart
```js
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
```



### Useful resources

- [Tailwind Elements](https://tailwind-elements.com/docs/standard/components/carousel/) - This website provides free tailwind templates such as carousel, forms, modals and many more



## Author

- Website - [Andoh Francis (website in progress)]
- Frontend Mentor - [@CobbyElsonfx](https://www.frontendmentor.io/profile/CobbyElsonfx)
- Twitter - [@CobbyElsonfx](https://www.twitter.com/CobbyElsonfx)


## Acknowledgments

Special thanks to Mr Oliver Mensah who has always been the strength and motivation behind every project I build


