console.log("Your index.js file is loaded correctly!");

$("#hide").on("click", function(){
    $(".workGrid").slideToggle()
});

$("li").on("hover", function(){
    $("li").css("padding-bottom", "12px")
})