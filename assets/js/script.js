document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-button");
  const icon = document.getElementById("menu-icon");
  const openIcon = document.getElementById("menu-open-icon");
  const menuLinks = document.getElementById("menu-links");

  menu.addEventListener("click", () => {
    openIcon.classList.toggle("show");
    icon.classList.toggle("hidden");
    menuLinks.classList.toggle("show");
  });

  const menuShop = document.getElementById("menu-shop");
  const shopIcon = document.getElementById("shop-icon");
  const shopIconOpen = document.getElementById("shop-icon-open");
  const menuShopLinks = document.getElementById("menu-shop-links");

  menuShop.addEventListener("click", () => {
    shopIconOpen.classList.toggle("show");
    shopIcon.classList.toggle("hidden");
    menuShopLinks.classList.toggle("show");
  });
});
