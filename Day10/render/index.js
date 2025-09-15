const list = [
  { src: "", brand: "", name: "", price: "" },
  { src: "", brand: "", name: "", price: "" },
  { src: "", brand: "", name: "", price: "" },
  { src: "", brand: "", name: "", price: "" },
  { src: "", brand: "", name: "", price: "" },
];

const box = document.querySelector(".box");

const makeItem = (item) => ` 
    <div class="item">
        <img src="${item.src}" />
        <div class="info">
            <span class="brand">${item.brand}</span>
            <span class="name">${item.name}</span>
            <span class="price">${item.price}</span>
        </div>
    </div>
  `;

list.forEach((x) => {
  box.insertAdjacentHTML("beforeend", makeItem(x));
});
