document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the form inputs
    const name = document.querySelector(".name").value;
    const contact = document.querySelector(".phone").value;
    const order_simp = document.querySelector(".order-simp").value;
    const order_det = document.querySelector(".order-det").value;


    // WhatsApp API URL (add your WhatsApp number)
    const phoneNumber = "923227120475"; // Replace with the owner's WhatsApp number (e.g., "923001234567")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Hello, I have an order:\n\nName: ${name}\nContact: ${contact}\nOrder: ${order_simp}\nDetails of Order : ${order_det}`
    )}`;

    // Open WhatsApp link
    window.open(whatsappUrl, '_blank');
    setTimeout(function() {
        location.reload(); // Refresh the page
    }, 3000);
});

//Toggle in navbar

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

order.addEventListener('click', () =>{
    window.location.href='pizza-order.html';
})