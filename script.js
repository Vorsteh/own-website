let backgroundImg = document.querySelector('top-content');

let changebackgroundImg = document.querySelector('#files')

document.querySelector("#files").addEventListener("change", (e) =>{
backgroundImg.style.backgroundImage = `url('`{changebackgroundImg}`')`
})




