fetch("https://dummyjson.com/recipes")
  .then((res) => res.json())
  .then((v) => console.log(v));
