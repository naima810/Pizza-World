let info_block = document.getElementById("item-info");
let info_img = document.querySelector(".info-img");
let info_head = document.querySelector(".info-heading");
let line = document.getElementById("line");
const tikka = document.getElementById("tikka");
const fajita = document.getElementById("fajita");
const lazania = document.getElementById("lazania");
const creamy = document.getElementById("creamy");
const kebab = document.getElementById("kebab");
const peri_peri = document.getElementById("peri-peri");
const bar_b_q = document.getElementById("bar.b.q");
const malai_boti = document.getElementById("malai-boti");
let sm_p = document.getElementById("s-p"); 
let m_p = document.getElementById("m-p"); 
let l_p = document.getElementById("l-p"); 
const close= document.getElementById("close");
const order=document.querySelector(".order");

function picture(pic){
    info_block.style.display = "block";
    info_img.style.backgroundImage = `url(${pic})`;
}
close.addEventListener('click',() =>{
    location.reload();
})
tikka.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Tikka Pizza";
    line.innerHTML = "Indulge in our Tikka Pizza—succulent chicken in bold tikka spices, all on a crispy crust with melted cheese. Simple, flavorful, and satisfying! 🍕🔥";
    sm_p.innerHTML="220";
    m_p.innerHTML="400";
    l_p.innerHTML="650";
});
fajita.addEventListener('click', () =>{
    picture("fajita-pizza.png");
    info_head.innerHTML = "Fajita Pizza";
    line.innerHTML = "Looking for something that packs a punch? Our Fajita Pizza is loaded with sizzling fajita-seasoned chicken or beef, fresh veggies, and a blend of melted cheese, all perfectly baked on a crispy crust. It’s the bold, flavorful choice your taste buds deserve! 🍕🌶️";
    sm_p.innerHTML="220";
    m_p.innerHTML="400";
    l_p.innerHTML="650";
});
lazania.addEventListener('click', () =>{
    picture("lazania-pizza.png");
    info_head.innerHTML = "Lazania Pizza";
    line.innerHTML = "A perfect blend of lasagna and pizza! Topped with seasoned beef, ricotta, marinara, mozzarella, and parmesan, baked to golden perfection. A treat for Italian food lovers!";
    sm_p.innerHTML="-";
    m_p.innerHTML="590";
    l_p.innerHTML="920";
});
creamy.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Creamy Pizza";
    line.innerHTML="Indulge in a rich and velvety delight! Topped with a creamy white sauce, succulent chicken, mozzarella, and a sprinkle of herbs, this pizza is a perfect blend of flavor and indulgence.";
    sm_p.innerHTML="300";
    m_p.innerHTML="520";
    l_p.innerHTML="820";
});
kebab.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Kebab Pizza";
    line.innerHTML="A flavorful fusion of spicy kebab chunks, fresh veggies, melted mozzarella, and tangy tomato sauce on a perfectly baked crust. A true delight for kebab lovers!";
    sm_p.innerHTML="300";
    m_p.innerHTML="600";
    l_p.innerHTML="850";
});
peri_peri.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Peri Peri Pizza";
    line.innerHTML="Spice up your meal with our Peri Peri Pizza! Loaded with zesty peri-peri chicken, fresh veggies, gooey mozzarella, and a drizzle of tangy peri-peri sauce for an irresistible kick.";
    sm_p.innerHTML="300";
    m_p.innerHTML="550";
    l_p.innerHTML="800";
});
bar_b_q.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Bar.B.Q Pizza";
    line.innerHTML="Savor the smoky goodness! Topped with tender BBQ chicken, caramelized onions, mozzarella, and a rich barbecue sauce, all on a perfectly baked crust.";
    sm_p.innerHTML="300";
    m_p.innerHTML="550";
    l_p.innerHTML="880";
});
malai_boti.addEventListener('click', () =>{
    picture("tikka-pizza.png");
    info_head.innerHTML = "Malai Boti Pizza";
    line.innerHTML="A creamy delight! Topped with flavorful malai boti chunks, mozzarella cheese, and a hint of herbs, all on a soft, perfectly baked crust. A true desi classic!";
    sm_p.innerHTML="350";
    m_p.innerHTML="600";
    l_p.innerHTML="900";
});
//Toggle button in menu
const toggle = document.querySelector(".navbar-toggle");
const link = document.querySelector(".link");

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