let page=1
let images = document.querySelector('.images')
let butt = document.querySelector('.button')
function findIm(){
    page++
    fetch(`https://pixabay.com/api/?key=39207344-802fb38289e47f3cf2d375300&category=editors_choice&page=${page}&per_page=10`)
        .then((response)=>response.json())
        .then((data) => {
            console.log(data.hits.length);
            for(let index=0;data.hits.length>index;index++){
                console.log(data.hits)
                let im=document.createElement('img')
                im.src = data.hits[index].largeImageURL
                images.appendChild(im)
            }
        })
}
findIm()
butt.addEventListener('click',findIm)