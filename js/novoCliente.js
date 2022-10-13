
var frm = document.querySelector("form")

frm.addEventListener("submit",(e)=>{
    
    var nome = frm.name.value
    var telefone = frm.phone.value
    var dataNascimento = Date.parse(frm.date.value)
    var dataFormatada = new Date(dataNascimento);
    alert(dataFormatada)

    console.log(`o valor:${nome} tem o tipo: ${typeof nome}`)
    console.log(`o valor:${telefone} tem o tipo: ${typeof telefone}`)
    console.log(`o valor:${dataNascimento} tem o tipo: ${typeof dataNascimento}`)
    e.preventDefault();//evita o envio do form
    
}
);
