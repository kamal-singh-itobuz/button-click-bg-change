const container = document.querySelector('.container');
const colorArray = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'];

container.addEventListener('click', (e) => {
    let buttonId = Number(e.target.dataset.btnid);
    container.style.backgroundColor = colorArray[buttonId];
});