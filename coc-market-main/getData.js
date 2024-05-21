async function getProducts() {
  try {
    let fetchPromises = [];
    for (let i = 1; i <= 20; i++) {
      const URL = `https://fakestoreapi.com/products/${i}`;
      fetchPromises.push(fetch(URL));
    }
    const responses = await Promise.all(fetchPromises);
    const productTemplate = document.getElementById("productTemplate");
    for (let response of responses) {
      if (!response.ok) {
        throw new Error("No se pudo realizar la petición");
      } else {
        const data = await response.json();

        const productClone = productTemplate.cloneNode(true);
        const TITLE = productClone.querySelector("#titleProduct");
        const IMAGE = productClone.querySelector("#image");
        const DESCRIPTION = productClone.querySelector("#description");
        const PRICE = productClone.querySelector("#price");

        TITLE.textContent = data.title;
        IMAGE.src = data.image;
        DESCRIPTION.textContent = data.description;
        PRICE.textContent = data.price;

        const GO_PRODUCT = productClone.querySelector("#goProduct");
        GO_PRODUCT.addEventListener("click", () => {
          localStorage.setItem("productData", JSON.stringify(data));
          window.location.href = "/pages/productContext.html";
        });
        document.querySelector("#productsContainer").appendChild(productClone);
      }
    }
    productTemplate.remove();
  } catch (error) {
    console.log("Error: ", error);
  }
}

getProducts();
