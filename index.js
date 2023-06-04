// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//     } else {
//     document.documentElement.classList.remove('dark')
// }



// (function imageCreator() {
//     let laptop = document.querySelector('.wrapperLaptop')
//     let imageElement = document.createElement("img")
//     document.documentElement.classList.contains('dark') ? imageElement.src = '/src/images/darkTablet.png' : imageElement.src = '/src/images/lightTablet.png'
//     laptop.appendChild(imageElement)
// }())





// (function imageCreator() {
//     let laptop = document.querySelector('.wrapperLaptop');
//     let imageElement = document.createElement("img");
    
//     if (document.documentElement.classList.contains('dark')) {
//       imageElement.src = '/src/images/darkTablet.png';
//     } else {
//       imageElement.src = '/src/images/lightTablet.png';
//     }
    
//     laptop.appendChild(imageElement);
// })();