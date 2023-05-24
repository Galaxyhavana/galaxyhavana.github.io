window.onload = function() {
  
    this.verificarLogin();
    
  };

  function verificarLogin(){
    
    if (localStorage.getItem("item") === null) {
        console.log('nao esta storage')
        // Não está na localStorage
    }else{
        console.log('esta storage')
    }
}