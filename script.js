let tituloquiz;
let urlquiz;
let qtdperguntas;
let qtdniveis;

let objtquiz = []

let txtpergunta;
let corpergunta;
let rpstcorreta;
let urlpergunta;
let resp1;
let url1;
let resp2;
let url2;
let resp3;
let url3;




function mudaobanner(){
    tituloquiz = document.querySelector(".tituloquiz").value;
    urlquiz = document.querySelector(".imagemquiz").value
    qtdperguntas = document.querySelector(".qtdperguntasquiz").value
    qtdniveis = document.querySelector(".qtdniveisquiz").value
    
    if( urlquiz === ""){
        alert("preencha todos os campos")
        return
    }

    if(tituloquiz.length > 65 || tituloquiz.length < 20 ){
        alert("O texto deve conter mais de 20 e menso de 65 caracteres.")
        return
    }
    if(qtdperguntas < 3){
        alert("minimo de perguntas é 3")
        return
      }
    if(qtdniveis < 2 ){
        alert("minimo de níveis é 2")
        return
      }
    if(isNaN(qtdperguntas) === true){
        alert("Use somente numeros  para quantidade de perguntas.")
        return
    }
    if(isNaN(qtdniveis) === true) {
        alert("Use somente numeros  para quantidade de niveis.")
        return
    }
    



objtquiz = {
	title: tituloquiz,
	image: urlquiz,
}	

console.log(tituloquiz)
console.log(urlquiz)
console.log(qtdperguntas)
console.log(qtdniveis)
console.log(objtquiz)
 document.querySelector(".banner").innerHTML +=
 `<img src="${objtquiz.image}" alt="" />
 <div class="opacity-escura"></div>
 <h2>${objtquiz.title}</h2>
 `
trocatelapergunta()
}
function trocatelapergunta(){
   document.querySelector('.qpergunta').classList.remove("none")
   document.querySelector('.qmenu').classList.add("none")

}
function criandopergunta(){
  
    txtpergunta = document.querySelector(".txt-1").value;
    corpergunta = document.querySelector(".cor-1").value;
    rpstcorreta = document.querySelector(".rpc-1").value;
    urlpergunta = document.querySelector(".url-1").value;
    resp1 = document.querySelector(".rpi-1").value;
    url1 = document.querySelector(".url-2").value;
    resp2 = document.querySelector(".rpi-2").value;
    url2 = document.querySelector(".url-3").value;
    resp3 = document.querySelector(".rpi-3").value;
    url3 = document.querySelector(".url-4").value;
    console.log(txtpergunta)
    console.log(corpergunta)
    console.log(rpstcorreta)
    console.log(urlpergunta)
    console.log(resp1)
    console.log(url1)
    console.log(resp2)
    console.log(url2)
    console.log(resp3)
    console.log(url3)
    
    if(txtpergunta.length < 20){
        alert("texto da pergunta precisa de no minimo 20 letras")
        return
    }
    if(rpstcorreta === "" || resp1 === "" || resp2 === "" || resp3 === ""){
        alert("necessario resposta")
        return
    }
}