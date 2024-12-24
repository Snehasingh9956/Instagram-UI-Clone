document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll("button.text-gray-700");

  likeButtons.forEach(button => {
    button.addEventListener("click", function () {
      if (button.textContent === "Like") {
        button.textContent = "Liked";
        button.classList.add("text-red-500");
      } else {
        button.textContent = "Like";
        button.classList.remove("text-red-500");
      }
    });
  });
});
