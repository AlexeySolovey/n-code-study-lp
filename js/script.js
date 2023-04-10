(function mobMenu(){

const hamburger_menu = document.querySelector(".hamburger-menu");
const mob_menu = document.querySelector(".mob-menu");

hamburger_menu.addEventListener("click", function(e){
    mob_menu.classList.toggle("active");
    this.classList.toggle("active");
});

}());


(function roadmap(){
    let roadmapItems = document.querySelector(".roadmap-step");   
    roadmapItems = Array.from(roadmapItems.children);
    
    let roadmapInfoItems = document.querySelector(".roadmap-step-info");
    roadmapInfoItems = Array.from(roadmapInfoItems.children);

    roadmapItems.forEach((item, index) => {
        item.addEventListener('click', function(){
            roadmapItems.forEach(item => item.classList.remove("active"));
            roadmapInfoItems.forEach(item => item.classList.remove("active"));
            roadmapInfoItems[index].classList.add("active");
            item.classList.add("active");
        })
    });

}());

(function accordion(){
    let accordionItem = document.querySelectorAll(".accordion__item")
    accordionItem.forEach(item => {
        item.addEventListener("click", function(){
            accordionItem.forEach(item => item.classList.remove("active"))
            this.classList.toggle("active")
        })
    })
}());