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

function select( ){
  document.getElementById('save').addEventListener('click',(event)=>{
    event.preventDefault();
    let select = document.body.querySelector('select')
    let novaOption = document.createElement('option')
    novaOption.text = document.getElementById('ProjecName').value
    console.log(novaOption)
    select.add(novaOption)
  })
}
export {
    MakingInputs,select
}


