function MakingInputs(){
    document.getElementById('new-project-btn').addEventListener('click',()=>{
        let modal =   document.querySelector('.modal')
        modal.style.display ="block"
        
        })
        document.querySelector('.close').addEventListener('click',() => {
          let modal = document.querySelector(".modal") 
          modal.style.display ="none"
        })

        document.getElementById('buton').addEventListener('click',() => {
          console.log("Hola")
        
         document.body.querySelector('.modal2').style.display = "grid"
         
          document.querySelector('.container').style.opacity = 0.1; 
        })
        
        
        document.body.querySelector('.pointer').addEventListener('click', () => {
          document.body.querySelector('.modal2').style.display = "none"
          document.querySelector(".container").style.opacity = 1
          
        })


      document.querySelector('.saving').addEventListener('click',()=>{
        // control errors first , just testing avoid repeting code 
        //
        
        createTodo()
        document.querySelector('.modal2').style.display ="none"
        document.querySelector('.container').style.opacity = 1
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

  document.querySelector('select').addEventListener('change',(event)=>{
  document.querySelector('.changeIt').innerText = event.target.value
  })
}

function createTodo(){
/// Dom title 
  let container = document.createElement('div')
  container.setAttribute("id","subcontainer")
  document.getElementById('todosWANTtoAdd').append(container)
  let Domtitle = document.createElement('div')
   container.append(Domtitle)
   Domtitle.innerText = document.querySelector(".titulo").value
   
// Dom date 
 let  Domdate = document.createElement('div')
  container.append(Domdate)
 Domdate.innerText = document.querySelector(".fecha").value

}


export {
    MakingInputs,select 
}


