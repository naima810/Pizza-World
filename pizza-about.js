const toggle = document.querySelector(".navbar-toggle");
const link = document.querySelector(".link");
const order=document.querySelector(".order");

toggle.addEventListener("click", () =>{
    // link.classList.remove(".show");
    if(link.style.display == "none"){
        link.style.display = "flex";

    }
    else{
        link.style.display="none";
    }
})

order.addEventListener('click',() =>{
    window.location.href = 'pizza-order.html';
})