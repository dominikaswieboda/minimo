$(".load-more-btn").on("click", function() {
  $(".post-thumbnail").each(function(index, item) {
    $(item).fadeIn();
  });
  $(".load-more-btn").fadeOut();
});

document.querySelector(".hamburger").addEventListener("click", function() {
  document.querySelector(".nav-items").classList.add("active");
});
document
  .querySelector(".hamburger-close")
  .addEventListener("click", function() {
    document.querySelector(".nav-items").classList.remove("active");
  });
