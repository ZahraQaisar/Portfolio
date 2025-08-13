document.querySelector(".hamburger img").addEventListener("click", () => {
    // document.querySelector(".navbar").style.left = "0";
    document.querySelector(".navbar").classList.add("btn-active");
    // console.log("hamburger")
})

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("btn-active");
})

