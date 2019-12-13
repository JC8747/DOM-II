// Your code goes here

//load
window.addEventListener('load', (event) => {
    alert('Well done loading the page!');
})

//resive
window.addEventListener('resize', (event) => {
    document.body.style.backgroundColor = 'blue'
});

//key commands
window.addEventListener("keydown", event => {
    if (event.key == "b") {
      document.body.style.background = "grey";
    }
});

window.addEventListener("keyup", event => {
    if (event.key == "b") {
      document.body.style.background = "";
    }
});

//click events
const mapPic = document.querySelector('.img-content img');
    mapPic.addEventListener('dblclick', (event) => {
        event.target.style.opacity = '.3';
})
    mapPic.addEventListener('click', (event) => {
        event.target.style.opacity = '1';
})


//mouse events
const txtcontent = document.querySelectorAll('.text-content');
    textcontent.forEach( element => {
        element.addEventListener('mousewheel', () => {
            element.style.color = 'purple';
  })
})

// const navbtn = document.querySelectorAll('.nav-link');
//     navbtn.forEach( element => {
//         element.addEventListener('mouseenter', () => {
//             element.style.color = 'orange';
//     })
// })
const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.color = 'green';
    })
})
// document.querySelectorAll('.nav-link');
//     navLink.forEach(element => {
//         element.addEventListener('mouseout', () => {
//             element.style.color = '';
//     })
// })



navLink.forEach(element => {
  element.addEventListener('click', () => {
    element.preventDefault();
  })
})