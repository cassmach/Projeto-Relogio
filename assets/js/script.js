
        // Aqui foi pego os elementos que iremos editar
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock () {
 // Aqui usando a clase "new Date" que é a classe para manipular data
    let now = new Date ();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

                       // Digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

                // Analógico

    // rotação dos ponteiros - tivemos que deixar -90 pois começava a 30°
    let sDeg = ((360 /60) * second) - 90; //segundos
    let mDeg = ((360 /60) * minute) - 90; // minutos
    let hDeg = ((360 / 12) * hour) - 90; // horas

     sElement.style.transform = `rotate(${sDeg}deg)`;
     mElement.style.transform = `rotate(${mDeg}deg)`;
     hElement.style.transform = `rotate(${hDeg}deg)`;
     

}
        // Função para adicionar um 0 na frente da hora

function fixZero(time){
    /*
    if(time < 10) {
        return '0'+time
    }else {
        return time;
    }*/
        // Condição Rezumida
    return time <10 ? `0${time}` : time;
}

   // Para continuar rodando a função update
setInterval(updateClock, 1000);
updateClock();  // novamente só para fluir melhor pois carrega na hora.
