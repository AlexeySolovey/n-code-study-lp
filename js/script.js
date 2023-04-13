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
            if(this.classList.contains("active")){
                this.classList.remove("active");
                item.children[1].style.maxHeight = 0;
            }else{
                accordionItem.forEach(item => item.classList.remove("active"));
                accordionItem.forEach(item => item.children[1].style.maxHeight = 0);
                this.classList.add("active");
                this.children[1].style.maxHeight = this.children[1].scrollHeight + 'px'
            }
        })
    })
}());

(function(){
    $('#course').select2({
        placeholder: 'Оберіть напрямок',
        minimumResultsForSearch: Infinity,
        width: '100%' 
    });

    $('#wherefrom').select2({
        placeholder: 'Звідки Ви дізнались про N-CODE?',
        minimumResultsForSearch: Infinity,
        width: '100%'     
    });
}())