$(document).ready(()=> {
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
      $("#cartValue").text(buttonValue)
    })




    // cartbasket toggle
    $("#cart").hover(()=>{
      $("#cartBasket").toggle()
    })
})


function openNav () {
  document.getElementById("mySideNav").style.width = "220px"

}

const closeNav = ()=>{
  document.getElementById("mySideNav").style.width = "0px"
}






