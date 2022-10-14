
var frm = document.querySelector("form")
//querySelector versus getElementById( )
frm.addEventListener("submit",(e)=>{
    
    var nome = frm.name.value
    var telefone = frm.phone.value
    var dataNascimento = frm.date.value
    var email = frm.username.value

    //var dataFormatada = new Date(dataNascimento);
    //alert(dataFormatada)

    console.log(`o valor:${nome} tem o tipo: ${typeof nome}`)
    console.log(`o valor:${telefone} tem o tipo: ${typeof telefone}`)
    console.log(`o valor:${dataNascimento} tem o tipo: ${typeof dataNascimento}`)
    console.log(`o valor:${email} tem o tipo: ${typeof email}`)
     
    //se já existe dados em localstorage, grava conteúdo anterior+; o novo
    if(localStorage.getItem("nome")){
        localStorage.setItem("nome",localStorage.getItem("nome")+";"+nome)
        localStorage.setItem("telefone",localStorage.getItem("telefone")+";"+telefone)
    }else{
        //senão é a primeira inclusão
        localStorage.setItem("nome",nome)
        localStorage.setItem("telefone",telefone)
    }
    
    //verifica se salvou
    if(localStorage.getItem("nome")){
       alert(`Ok! Cliente ${nome} Cadastrado com sucesso!`)
    }

    frm.reset(); //limpa o form
    frm.nome.focus() //foco no campo nome


    e.preventDefault();//evita o envio do form
    
}
);
