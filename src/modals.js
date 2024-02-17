function MakingInputs(){
    document.getElementById('new-project-btn').addEventListener('click',()=>{
        let modal =   document.querySelector('.modal')
        modal.style.display ="block"
        
        })
        document.querySelector('.close').addEventListener('click',() => {
          let modal = document.querySelector(".modal") 
          modal.style.display ="none"
        })
}
export {
    MakingInputs
}


