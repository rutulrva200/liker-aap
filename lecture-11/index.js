

let count0 = localStorage.getItem('count_0');
let count1 = localStorage.getItem('count_1');
let count2 = localStorage.getItem('count_2');
let count3 = localStorage.getItem('count_3');
let count4 = localStorage.getItem('count_4');
document.querySelector(`.box0`).innerText = count0;
document.querySelector(`.box1`).innerText = count1;
document.querySelector(`.box2`).innerText = count2;
document.querySelector(`.box3`).innerText = count3;
document.querySelector(`.box4`).innerText = count4;

const getCount = (index) => {
    return localStorage.getItem(`count_${index}`) ? parseInt(localStorage.getItem(`count_${index}`)) : 0;
}

const setCount = (index, count) => {
    localStorage.setItem(`count_${index}`, count);
}

const updatePillBox = (index, count) => {
    document.querySelector(`.box${index}`).innerText = count;
}

const counter = (index) => {
    let count = getCount(index);
    count++;
    setCount(index, count);
    updatePillBox(index, count);
    console.log("test");
}
let like = document.querySelector('.fa-thumbs-up');
like.addEventListener('click', () => counter(0));

let dislike = document.querySelector('.fa-thumbs-down');
dislike.addEventListener('click', () => counter(1));

let comment = document.querySelector('.fa-comments');
comment.addEventListener('click', () => counter(2));

let share = document.querySelector('.fa-share');
share.addEventListener('click', () => counter(3));

let subscribe = document.querySelector('.fa-bell');
subscribe.addEventListener('click', () => counter(4));