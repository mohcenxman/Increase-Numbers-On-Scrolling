let section = document.querySelector(".three");
let nums = document.querySelectorAll(".nums .num");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop) {
        if(!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(ele) {
    let goal = ele.dataset.goal;
    let counter = setInterval(() => {
        ele.textContent++;
        if(ele.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000/goal);
}
