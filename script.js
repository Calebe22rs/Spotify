let musicas = [
    { titulo: 'Number One', artista:'Shirō Sagisu', src:'musicas/Number One - Bankai.mp3', img:'imagens/bleach.png' },
    { titulo: 'Bring to me life', artista:'Evanescence', src:'musicas/Evanescence - Bring Me To Life (Official HD Music Video).mp3', img:'imagens/bringtomelife.jpg' },
    { titulo: 'Bad Boys', artista:'Inner Circle', src:'musicas/Inner Circle- Bad Boys.mp3', img:'imagens/badboys.png' },
    { titulo: 'No 1. Party Anthem', artista:'Artic Monkeys', src:'musicas/No. 1 Party Anthem.mp3', img:'imagens/no1partyanthem.jpg' },
];

let musica = document.querySelector('audio');
let  indexMusica = 0

musica.addEventListener('loadeddata', duration)

let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')

renderizarMusica(indexMusica)

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

musica.addEventListener('timeupdate', atualizarBarra)

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    // O tamanho da barra recebe a porcentagem obtida na operação abaixo.
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido =  document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    
    return campoMinutos + ':'+campoSegundos;
}

function duration (){
    let duracaoMusica = document.querySelector('.fim')
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

