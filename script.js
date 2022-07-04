//MENU CRIAÇÂO
//--------daniel-----
const urlAPI = "https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes"
const main = document.querySelector("main")
let data;
//-------------------

let tituloquiz;
let urlquiz;
let qtdperguntas;
let qtdniveis;
//PERGUNTAS
let objtquiz = []
let question = []
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
//NIVEl
let level = []
let titulonivel;
let acertomin;
let urlnivel;
let descricaonivel;


    
    for (let i=0; i<resposta.data.length; i++){
        let tempQuizz = resposta.data[i];
        
        quizzContainer.innerHTML += `<div class="quizz-box" >
        <img src="${tempQuizz.image}" >
        <p>${tempQuizz.title}</p>
        <div class="gradiente" id="${tempQuizz.id}" onClick="carregarQuizz(this)"></div>
      </div>`
    }   

function carregarQuizz(elemento){
    const id =  elemento.id;
    console.log(elemento.id);
    const promessa = axios.get(`https://mock-api.driven.com.br/api/v7/buzzquizz/quizzes/${id}`);
    limparPagina();
    promessa.then(quizzGame);
    
    
}
function quizzGame(resposta){
    
    console.log(resposta.data);
    data = resposta.data;
    main.innerHTML += `<div class="banner">
    <img src="${data.image}" alt="" />
    <div class="opacity-escura"></div>
    <h2>${data.title}</h2>
    </div>
    <div class="conteudo"></div>`
    for (let i=0;i<data.questions.length;i++){
        let quizzQuestion = data.questions[i]; 
        main.querySelector(".conteudo").innerHTML += `
        
          <div class="container">
            <div class="pergunta" style="background: ${quizzQuestion.color};">
              ${quizzQuestion.title}
            </div>
          </div>  `
       renderizaRespostas(i);
    }
}
function renderizaRespostas(j){
    const quizzResp = document.querySelector(".container:last-child");
    for (let i=0;i<data.questions[j].answers.length;i++){
        let quizzAnswer = data.questions[j].answers[i];
        quizzResp.innerHTML += `<div class="box" onClick="selecionarOpcao(this, ${j}, ${i})">
        <img src=${quizzAnswer.image} alt="" />
        <p>${quizzAnswer.text}</p>
      </div>`

    }
}
function selecionarOpcao(Eonclick,numPergunta,numResposta){
    const opcoes = Eonclick.parentNode.querySelectorAll(".box")
    opcoes.forEach(box => { 
        if(Eonclick !== box){
            box.classList.add("opacity-clara");
        }
        box.removeAttribute("onClick")
    });

}

function limparPagina(){
    main.innerHTML = "";
}
//--------------------------------------
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

 document.querySelector(".banner").innerHTML +=
 `<img src="${objtquiz.image}" alt="" />
 <div class="opacity-escura"></div>
 <h2>${objtquiz.title}</h2>
 `



inseretabelaperguntas()
trocatelapergunta()
}
function trocatelapergunta(){
   document.querySelector('.qpergunta').classList.remove("none")
   document.querySelector('.qmenu').classList.add("none")
}
function inseretabelaperguntas(){
    
for(let i = 0; i < qtdperguntas; i++){
    document.querySelector(".qpergunta2").innerHTML +=
    `       
    <span class="nivel"
      >Pergunta ${i+1} <ion-icon name="create-outline"></ion-icon
    ></span>
    <input class="boxinput txt-${i} " 
    type="text" placeholder="Texto da pergunta" />
    <input
      class="boxinput cor-${i} "
      type="text"
      placeholder="Cor de fundo da pergunta"
    />
    <span class="nivel">Resposta correta </span>
    <input class="boxinput rpc-${i} "
     type="text" placeholder="Resposta correta" />
    <input class="boxinput urc-${i} "
     type="text" placeholder="URL da imagem " />
    <span class="nivel">Respostas incorretas </span>
    <input
      class="boxinput rpi1-${i} "
      type="text"
      placeholder="Resposta incorreta ${i} "
    />
    <input class="boxinput url1-${i} "
     type="text" placeholder="URL da imagem 1" />
    <input
      class="boxinput rpi2-${i} "
      type="text"
      placeholder="Resposta incorreta 2"
    />
    <input class="boxinput url2-${i} "
     type="text" placeholder="URL da imagem 2" />
    <input
      class="boxinput rpi3-${i} "
      type="text"
      placeholder="Resposta incorreta 3"
    />
    
    <input class="boxinput url3-${i} " type="text"
     placeholder="URL da imagem 3" />
  `
}
}




function criandopergunta(){
  
for(let i = 0; i < qtdperguntas; i++){
      txtpergunta  = document.querySelector(`.txt-${i}`).value;
      corpergunta = document.querySelector(`.cor-${i}`).value;
      rpstcorreta = document.querySelector(`.rpc-${i}`).value;
      urlpergunta = document.querySelector(`.urc-${i}`).value;
      resp1 = document.querySelector(`.rpi1-${i}`).value;
      url1 = document.querySelector(`.url1-${i}`).value;
      resp2 = document.querySelector(`.rpi2-${i}`).value;
      url2 = document.querySelector(`.url2-${i}`).value;
      resp3 = document.querySelector(`.rpi3-${i}`).value;
      url3 = document.querySelector(`.url3-${i}`).value;
    let resp = [resp1,resp2,resp3 ]
    let respurl = [url1, url2, url3]
    let resposta = []
     
     for(let i = 0; i < 3; i++){
        if(resp[i] !== ""){
        resposta[i] = {
            text:resp[i],
            image: respurl[i],
            isCorrectAnswer: false
        }
        }

     }
     
     question[i] = {
        title: txtpergunta,
        color: corpergunta,
        answers:[{
            text:rpstcorreta,
            image: urlpergunta,
            isCorrectAnswer: true
        }]
    }
        question[i].answers.push(resposta)
       
} 
   
console.log(question)
   










     if(txtpergunta.length < 20){
         alert("texto da pergunta precisa de no minimo 20 letras")
         return
     }
     if(rpstcorreta === ""){
         alert("necessario resposta correta")
         return
     }else if(resp1 === "" && (resp2 === "" && resp3 === "")){
         alert("insira ao menos uma resposta incorreta")
         return    }
 mudatelanivel()
 inseretabeladenivel()
}



function mudatelanivel(){
    document.querySelector(".qnivel").classList.remove("none")
    document.querySelector(".qpergunta").classList.add("none")
}


function inseretabeladenivel(){
    for(let i = 0; i < qtdniveis; i++){
        document.querySelector('.qnivel2').innerHTML +=
          `<span class="nivel "
            >Nivel ${i+1} <ion-icon name="create-outline"></ion-icon
          ></span>
          <input class="boxinput titulonv${i}" type="text" placeholder="Título do nível" />
          <input
            class="boxinput porcentagem${i}"
            type="text"
            placeholder="% de acerto mínima"
          />
          <input
            class="boxinput urlnv${i}"
            type="text"
            placeholder="URL da imagem do nível"
          />
          <input
            class="boxinput descrinl${i}"
            type="text"
            placeholder="Descrição do nível"
          />
        `
}
}
function criarnivel(){
    for(let i = 0; i < qtdniveis; i++){
    titulonivel = document.querySelector(`.titulonv${i}`).value;
    acertomin = document.querySelector(`.porcentagem${i}`).value;
    urlnivel = document.querySelector(`.urlnv${i}`).value;
    descricaonivel = document.querySelector(`.descrinl${i}`).value;

    level[i] =
		{
			title: titulonivel,
			image: urlnivel,
			text: descricaonivel,
			minValue: acertomin,
		}
	
    }
    console.log(level)


  

  objtquiz = {
    title: tituloquiz,
    image: urlquiz,
    questions :  question,
    levels : level,
  }	

  console.log(objtquiz)
} 
