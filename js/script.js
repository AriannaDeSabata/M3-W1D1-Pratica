function removeLink(){
    let link = document.querySelectorAll("main div.p-4:nth-child(3) ol.list-unstyled li a")
    for(let i of link){
        if(i.textContent.toLowerCase() == "twitter"){
            i.remove()
        }
    }
}

removeLink()



let keepReading = document.querySelector("div.jumbotron  p.lead.mb-0 a").addEventListener("click" , removeCont)

function removeCont(){
   let cont = document.querySelector("div.jumbotron ")
    cont.remove()
}




let author = document.querySelectorAll("main .blog-main > div h2 + p a ")
let authorSelect

author.forEach((el) => {el.addEventListener("mouseover", function(){
    alert(el.textContent)
})})




