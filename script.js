window.addEventListener(("scroll"),()=>{
    document.querySelector(".Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector(".layer-2").style.marginTop = `${window.scrollY}px`
    document.querySelector(".bird-1").style.marginLeft = `${window.scrollY}px`
    document.querySelector(".bird-1").style.marginTop = `-${window.scrollY / 2}px`
    document.querySelector(".bird-2").style.marginRight = `${window.scrollY}px`
    document.querySelector(".bird-2").style.marginTop = `-${window.scrollY / 2}px`
})