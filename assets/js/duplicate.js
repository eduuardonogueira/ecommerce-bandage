const buttonMoreProducts = document.getElementById("moreProducts");
const product = document.getElementById("product");
const productQty = 8;

let allPosts = false;

const toggleProductsClass = () => {
  for (let i = 4; i <= productQty; i++) {
    const product = document.getElementById(`product${i}`);
    product.classList.toggle("product-hidden");
  }
};

buttonMoreProducts.addEventListener("click", () => {
  allPosts = !allPosts;

  if (allPosts) {
    const product = document.getElementById("product3");
    product.scrollIntoView();
    buttonMoreProducts.innerHTML = "Close Products";
  } else {
    buttonMoreProducts.innerHTML = "More Products";
  }

  toggleProductsClass();
});

const post = document.getElementById("post");
const postQty = 3;

const addIntoHtml = (cont, element, clone, latestCloned) => {
  if (cont === 2) {
    element.after(clone);
  } else {
    latestCloned.after(clone);
  }
};

const duplicateProducts = (cont) => {
  const lastestProductCloned = document.getElementById(`product${cont - 1}`);
  const cloneProduct = product.cloneNode(true);
  const cloneProductImage = cloneProduct.childNodes[1];
  const imageUrl = `./assets/img/product-cover${cont}.jpg`;

  cloneProduct.id = `product${cont}`;
  cloneProductImage.src = imageUrl;

  if (cont >= 4 && window.innerWidth < 1024 && !allPosts) {
    cloneProduct.classList.add("product-hidden");
  }
  addIntoHtml(cont, product, cloneProduct, lastestProductCloned);
};

const duplicatePosts = (cont) => {
  const postImage = post.childNodes[1];

  const latestPostCloned = document.getElementById(`post${cont - 1}`);
  const clonePost = post.cloneNode(true);
  const clonePostImage = clonePost.childNodes[1];

  const mobileImageUrl = `./assets/img/products-post${cont}__mobile.jpg`;
  const desktopImageUrl = `./assets/img/products-post${cont}__desktop.jpg`;

  if (cont === 1) {
    postImage.src =
      window.innerWidth >= 1024 ? desktopImageUrl : mobileImageUrl;
  } else {
    clonePostImage.src =
      window.innerWidth >= 1024 ? desktopImageUrl : mobileImageUrl;
    clonePost.id = `post${cont}`;
    addIntoHtml(cont, post, clonePost, latestPostCloned);
  }
};

for (let i = 2; i <= productQty; i++) {
  duplicateProducts(i);

  if (i - 1 <= postQty) {
    duplicatePosts(i - 1);
  }
}
