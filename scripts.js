//Getting data from API
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://api.rootnet.in/covid19-in/stats/latest');
ourRequest.onload = function(){
  var number = 0;
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData.data.regional);
  lele(ourData);
};
ourRequest.send();

//mainfunction
function lele(ledata){

    //converts object to string
    function convo(obj){
      var loc = obj.loc;
      var indianCase = obj.confirmedCasesIndian;
      var forgienCase = obj.confirmedCasesForeign;
      var death = obj.deaths;
      var discharge = obj.discharged;
  
      var output = "State: "+obj.loc+"\n"+
                    "Case: "+obj.confirmedCasesIndian+"\n"+
                    "deaths: "+obj.deaths + "\n";
      console.log(output);
      return output;
    }
  
    //var infoText = document.getElementById('infoText');
    var infoText = document.getElementById('info-box');
  document.addEventListener("click", doSomething, false);
  function doSomething(e) {
    if (e.target !== e.currentTarget) {
      var clickedItem = e.target.id;
    
      switch (clickedItem) {
        case "IN-AP":
              infoText.innerHTML = convo(ledata.data.regional[0]);
            break;
        case "IN-AN":
            infoText.textContent = convo(ledata.data.regional[1]);
          break;
        case "IN-BR":
            infoText.textContent = convo(ledata.data.regional[4]);
          break;
        case "IN-CT":
            infoText.textContent = convo(ledata.data.regional[6]);
          break;
        case "IN-DL":
            infoText.textContent = convo(ledata.data.regional[7]);
          break;
        case "IN-GA":
            infoText.textContent = convo(ledata.data.regional[8]);
          break;
        case "IN-GJ":
            infoText.textContent = convo(ledata.data.regional[9]);
          break;
        case "IN-HR":
            infoText.textContent = convo(ledata.data.regional[10]);
          break;
        case "IN-HP":
            infoText.textContent = convo(ledata.data.regional[11]);
          break;
        case "IN-JK":
            infoText.textContent = convo(ledata.data.regional[12]);
          break;
        case "IN-KA":
            infoText.textContent = convo(ledata.data.regional[14]);
          break;
        case "IN-KL":
            infoText.textContent = convo(ledata.data.regional[15]);
          break;
        case "IN-MP":
            infoText.textContent = convo(ledata.data.regional[17]);
          break;
        case "IN-MH":
            infoText.textContent = convo(ledata.data.regional[18]);
          break;
        case "IN-MN":
            infoText.textContent = convo(ledata.data.regional[19]);
            break;
        case "IN-MZ":
            infoText.textContent = convo(ledata.data.regional[20]);
          break;
        case "IN-OR":
            infoText.textContent = convo(ledata.data.regional[21]);
          break;
        case "IN-PB":
            infoText.textContent =convo(ledata.data.regional[23]);
          break;
        case "IN-RJ":
            infoText.textContent = convo(ledata.data.regional[24]);
          break;
        case "IN-TN":
            infoText.textContent = convo(ledata.data.regional[25]);
          break;
        case "IN-TG":
            infoText.textContent = convo(ledata.data.regional[26]);
          break;
        case "IN-UT":
            infoText.textContent =convo(ledata.data.regional[27]);
          break;
        case "IN-UP":
            infoText.textContent = convo(ledata.data.regional[28]);
          break;
        case "IN-WB":
            infoText.textContent = convo(ledata.data.regional[29]);
          break;
        case "IN-AR":
            infoText.textContent = "Arunachal Pradesh";
          break;
        case "IN-AS":
            infoText.textContent = convo(ledata.data.regional[3]);
          break;
        case "IN-NL":
            infoText.textContent = "Nagaland";
          break;
        case "IN-TR":
            infoText.textContent = "Tripura";
          break;
        case "IN-SK":
            infoText.textContent = "Sikkim";
          break;
        case "IN-ML":
            infoText.textContent = "Meghalaya";
          break;
        case "IN-JH":
            infoText.textContent = convo(ledata.data.regional[13]);
          break;
      }
    }
    e.stopPropagation();
  }
  }
    //jquery for infobox
    $("path, circle").hover(function(e) {
      $('#info-box').css('display','block');
      $('#info-box').text(" Click \n   To \n Show ");
    });
    $("path, circle").mouseleave(function(e) {
      $('#info-box').css('display','none');
    });
    $(document).mousemove(function(e) {
      $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
      $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
    }).mouseover();

