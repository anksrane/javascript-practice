let items=document.querySelectorAll(".item");
let next=document.querySelector("#next");
let prev=document.querySelector("#prev");
let thumbnails=document.querySelectorAll(".thumbnail-item");

// conf
let countItem=items.length;
let itemActive=0;

next.addEventListener("click",function(){
    itemActive=itemActive+1;
    if(itemActive>=countItem){
        itemActive=0;
    }
    showSlider();
})

prev.addEventListener("click",function(){
    itemActive=itemActive-1;
    if(itemActive<0){
        itemActive=countItem-1;
    }
    showSlider();
})

function showSlider() {
    let oldItemActive=document.querySelector('.slider .list .item.active');
    let oldThumbnailActive=document.querySelector('.thumbnail .thumbnail-item.active');
    oldItemActive.classList.remove('active');
    oldThumbnailActive.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",function(){
        itemActive=index;
        showSlider();
    })
})

// autorun slider
let refreshInterval=setInterval(()=>{
    next.click();
},5000);