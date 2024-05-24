import { getProducts } from "./js/getData.js";
import { loadProduct } from "./js/context.js";
import { addCart } from "./js/addCart.js";
import { loadRoute } from "./js/route.js";

loadRoute();
document.addEventListener('DOMContentLoaded', getProducts);
loadProduct();
addCart();
