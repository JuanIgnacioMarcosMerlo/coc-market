window.onload = () => {
  const productData = JSON.parse(localStorage.getItem("productData"));
  if (productData) {
    const PRODUCT_TITLE = document.querySelector(".product-title");
    const PRODUCT_IMAGE = document.querySelector(".product-image");
    const PRODUCT_DESCRIPTION = document.querySelector(".product-description");
    const PRODUCT_PRICE = document.querySelector(".product-price");

    PRODUCT_TITLE.textContent = productData.title;
    PRODUCT_IMAGE.src = productData.image;
    PRODUCT_DESCRIPTION.textContent = productData.description;
    PRODUCT_PRICE.textContent = productData.price;
  }
};
