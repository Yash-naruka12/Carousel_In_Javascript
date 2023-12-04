
document.getElementById("next").addEventListener("click", () => {
    let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
});

document.getElementById("prev").addEventListener("click", () => {
    let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length-1]);
});
