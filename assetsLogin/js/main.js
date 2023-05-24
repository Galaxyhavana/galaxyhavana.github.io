/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

window.onload = function() {
    console.log('VERIFICANDO SESSAO')
    this.verificaSessao();
    
};

function verificaSessao(){
      if (sessionStorage.getItem("verificado") === 'true') {
        console.log('sessao verificada')
        window.location.href = '../galaxy/gerenciamento.html';
        // Não está na localStorage
      }
}

  function verificarLogin(){

    var password = document.getElementById("password").value;
    var acessos = ['KHMPCEYVFN', 'YQOKEWZGTD', 'FWPIVOCSQE', 'FBVZXJNQES', 'MEPNCKUSBY', 'QYAPFUXITH', 'TIGREGESP', 'RPZANDO']
    // if (localStorage.getItem("item") === null) {
    //     console.log('nao esta storage')
    //     // Não está na localStorage
    // }else{
    //     console.log('esta storage')
    // }

    if(acessos.includes(password)){
        sessionStorage.setItem('verificado', 'true');
        window.location.href = "../galaxy/gerenciamento.html";
        
    }else{
        alert('Acesso Negado!! Falar com Brasileiro')
    }



}
