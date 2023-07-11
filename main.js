//função que será chamadaao pressionarmos o botão iniciar/
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});//código para acessar o microfone//
   //função pre definida do ml5 para acionar a classificação de sons
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DL1uGNNMj/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);//variavel que contem o modelo do TM com classify que é usado para comparar audios e obter resultado
}
//A função gotResults, a qual contém o resultado da comparação possui dois parâmetros dentro dela - um é error (erro) e o outro é o results (resultado).
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "palmas") {
      img.src = 'demogorgon.gif';
      img1.src = 'alien.webp';
      img2.src = 'traje-predador-fortnite.webp';
      img3.src = 'alien2.webp';
    } else if (results[0].label == "musiquinha totosa") {
      img.src = 'Demogorgon.webp';
      img1.src = 'zerator.gif';
      img2.src = 'traje-predador-fortnite.webp';
      img3.src = 'alien2.webp';
    } else if (results[0].label == "rosnado") {
      img.src = 'Demogorgon.webp';
      img1.src = 'alien.webp';
      img2.src = 'gif predator.gif';
      img3.src = 'alien2.webp';
    }else {
      img.src = 'Demogorgon.webp';
      img1.src = 'alien.webp';
      img2.src = 'traje-predador-fortnite.webp';
      img3.src = 'alien-fortnite.gif';
    }
  }
}
//https://teachablemachine.withgoogle.com/models/DL1uGNNMj/