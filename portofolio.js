

// FILTER PROJECTS
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filterValue === "all" || card.classList.contains(filterValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
