window.addEventListener("load", () => {
  const searchBtn = document.querySelector(".search--icon");
  const searchForm = document.querySelector(".search--form");
  const closeBtn = document.querySelector(".close--icon");
  const siteNav = document.querySelector(".site-nav");
  const menuToggle = document.querySelector(".menu--toggle");
  const siteCloseBtn = document.querySelector(".nav--close-icon");
  const blankSpace = document.querySelector(".blank-nav");

  searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");

    document.addEventListener("keydown", function (e) {
      if (searchForm.classList.contains("active") && e.key === "Escape") {
        searchForm.classList.toggle("active");
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
  });

  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("active");
  });

  siteCloseBtn.addEventListener("click", () => {
    siteNav.classList.toggle("active");
  });

  blankSpace.addEventListener("click", () => {
    siteNav.classList.toggle("active");
  });
});
