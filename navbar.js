
// for(let i=0;i<5;i++){
//     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseover', (e)=>{
//         if(e.target.children[0]==undefined){
//             e.target.style.color = '#03123f'
//         }
//         if(e.target.children[0]!=undefined){
//             e.target.children[0].style.color = '#03123f'
//         }
//     })
// }
// for(let i=0;i<5;i++){
//     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseout', (e)=>{
//         if(e.target.children[0]==undefined){
//             e.target.style.color = '#4ecdd4'
//         }
//         if(e.target.children[0]!=undefined){
//             e.target.children[0].style.color = '#4ecdd4'
//         }
//     })
// }
// document.querySelector('.navbar-links').style.width = '50%'
document.querySelector('.navbar-links').style.paddingLeft = '0px'

// window.onload = function (e) {
//     document.querySelector('.navbar-links').style.width = '60%'
//     if (document.querySelector('.left')) document.querySelector('.left').style.left = '0';
// }

function extend() {
    let navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.style.width == '0%') {
        // document.querySelector('.burger').style.background = 'linear-gradient(45deg, #0c1bc7, #a734ff))'
        document.querySelector('.burger').style.background = 'var(--theme-bg-light)'
        navbarLinks.style.width = '100%'
        document.querySelector('.navbar-links').style.paddingLeft = '20px'
    }
    else {
        document.querySelector('.burger').style.background = 'transparent'
        navbarLinks.style.width = '0%'
        document.querySelector('.navbar-links').style.paddingLeft = '0px'
        navbarLinks.style
    }
}

let drop_down_menu = document.getElementsByClassName('drop-down-navbar-div')[0];
drop_down_menu.style.top = '-200px';
function drop_down_the_menu(){
    if(drop_down_menu.style.top=='-200px') drop_down_menu.style.top = '100px';
    else drop_down_menu.style.top = '-200px';
}

