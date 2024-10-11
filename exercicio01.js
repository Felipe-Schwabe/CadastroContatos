var linhaEditar
var editando
 

var nomezin = document.getElementById("no")
var emailzin = document.getElementById("em")
var datin = document.getElementById("dn")
var cpfzin = document.getElementById("cpf")
var cidadin = document.getElementById("ci")
var estadin = document.getElementById("es")
var enderecin = document.getElementById("end")



function limpar(){
    
    document.getElementById("no").value= ""
    document.getElementById("em").value = ""
    document.getElementById("dn").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("ci").value = ""
    document.getElementById("es").value = ""   
    document.getElementById("end").value = ""


}


    function Cadastrar() {
    
        
        

    
    
    if(nomezin.value=="" || emailzin.value=="" || datin.value=="" || cpfzin.value==""){
        alert("PREENCHA OS CAMPOS OBRIGATÓRIOS ")
        return
    }
    var tabela = document.getElementById("listaTabela")
    var re_em= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(re_em.test(em.value)){
    }else{
        alert("EMAIL INVÁLIDO,TENTE NOVAMENTE")
        return
    }

    var re_dn=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
    if(re_dn.test(dn.value)){
    }else{
        alert("DATA DE NASCIMENTO INVÁLIDA,TENTE NOVAMENTE")
        return
    }
    var re_cpf=/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    if(re_cpf.test(cpf.value)){
    }else{
        alert("CPF INVÁLIDO,TENTE NOVAMENTE")
        return}


        if(editando){
            
                linhaEditar.cells[0].innerHTML=nomezin.value
                linhaEditar.cells[1].innerHTML=emailzin.value
                linhaEditar.cells[2].innerHTML=datin.value
                linhaEditar.cells[3].innerHTML=cpfzin.value
                linhaEditar.cells[4].innerHTML=estadin.value
                linhaEditar.cells[5].innerHTML=cidadin.value
                linhaEditar.cells[6].innerHTML=enderecin.value
                alert("Edição realizada com sucesso!")
            }else{
            var tabelaDados = document.getElementById("tabelaDados");
            var tr = tabelaDados.insertRow()
    
            var td_nomezin = tr.insertCell(0)
            var td_emailzin = tr.insertCell(1)
            var td_datin = tr.insertCell(2)
            var td_cpfzin = tr.insertCell(3)
            var td_estadin = tr.insertCell(4)
            var td_cidadin = tr.insertCell(5)
            var td_enderecin = tr.insertCell(6)
            var td_acoes = tr.insertCell(7)
            
            td_acoes.innerHTML='<button onclick=Editar(this)>Editar</button> <button onclick="deleteRow(this)">Excluir</button>'
            td_nomezin.innerHTML = nomezin.value
            td_emailzin.innerHTML = emailzin.value
            td_datin.innerHTML = datin.value
            td_cpfzin.innerHTML = cpfzin.value
            td_cidadin.innerHTML= cidadin.value
            td_estadin.innerHTML = estadin.value
            td_enderecin.innerHTML = enderecin.value
            }

            editando=false


            limpar()

            }

            function preencher()
            {
                document.getElementById("no").value="XXXX"
                document.getElementById("em").value = "Xxxxxxx@gmail.com"
                document.getElementById("dn").value = "30/04/2006"
                document.getElementById("cpf").value = "077.739.838-90"
                document.getElementById("ci").value = "Joinville"
                document.getElementById("es").value = "SC"   
                document.getElementById("end").value = "Rua xxx 791"
            }
        
            
            function Editar(botao)
            {
              editando=true
              linhaEditar = botao.parentNode.parentNode

              nomezin.value = linhaEditar.cells[0].innerHTML
              emailzin.value = linhaEditar.cells[1].innerHTML
              datin.value = linhaEditar.cells[2].innerHTML
              cpfzin.value = linhaEditar.cells[3].innerHTML
              estadin.value = linhaEditar.cells[4].innerHTML
              cidadin.value = linhaEditar.cells[5].innerHTML
              enderecin.value = linhaEditar.cells[6].innerHTML
              

            }
               
               
            function deleteRow(botao)
            {
                confirm("Tem certeza que deseja apagar esse cadastro?")
                var linha = botao.parentNode.parentNode
                linha.remove()
                alert("O cadastro será apagado com sucesso!")

            }