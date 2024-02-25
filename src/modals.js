function modals(){
  document.getElementById('clave').addEventListener('click',()=>{
      document.querySelector('.modal2').style.display = "grid"
      document.querySelector(".op").style.opacity = "0.2"
  })


  document.querySelector('.close').addEventListener('click',()=>{
      document.querySelector('.modal2').style.display = "none"
      document.querySelector('.op').style.opacity = "1"
  })

  
  document.querySelector('select').addEventListener('change',(event)=>{
      console.log(event.target.textContent)
      console.log("hello")
      document.querySelector('.titulos').textContent = document.querySelector('select').value
  })
}
export {
  modals
}