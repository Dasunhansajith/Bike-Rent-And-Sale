const bikeData = [
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-1.png",
    tag: "Free Cancellation",
  },
  {
    name: "Ducati Scrambler",
    type: "SCRAMBLER",
    price: 19,
    image: "images/bike-2.png",
    tag: "Free Helmet",
  },
  {
    name: "Yamaha MT-15",
    type: "NAKED",
    price: 14,
    image: "images/bike-3.png",
    tag: "Best Seller",
  },
  {
    name: "Royal Enfield",
    type: "CRUISER",
    price: 15,
    image: "images/bike-4.png",
    tag: "Free Cancellation",
  },
  {
    name: "KTM Duke 390",
    type: "STREET",
    price: 16,
    image: "images/bike-5.png",
    tag: "Hot Deal",
  },
  {
    name: "Suzuki Gixxer",
    type: "SPORTS",
    price: 13,
    image: "images/bike-6.png",
    tag: "Low Price",
  },
  {
    name: "Honda CB500X",
    type: "TOURING",
    price: 18,
    image: "images/bike-7.png",
    tag: "Popular",
  },
  {
    name: "Kawasaki Z900",
    type: "NAKED",
    price: 20,
    image: "images/bike-8.png",
    tag: "Free Delivery",
  },
];

// Function to create a bike box element
const createBikeBox = (bike) => `
  <div class="bike-box">
    <img src="${bike.image}" alt="${bike.name}" class="bike-img">
    <div class="title-price">
      <div class="title-data">
        <h2>${bike.name}</h2>
        <p>${bike.type}</p>
      </div>
      <h3 class="bike-price">$${bike.price}<span>/hour</span></h3>
    </div>
    <a href="#" class="book-btn">Book Bike</a>
    <span class="tag">${bike.tag}</span>
  </div>
`;

// Render bike boxes to the DOM
const bikeContent = document.querySelector('.bikes-content');
bikeData.forEach((bike) => {
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
});

// Menu toggle animation
let menu = document.querySelector(".menu-icon");
menu.onclick = () => {
  menu.classList.toggle("move");
};
