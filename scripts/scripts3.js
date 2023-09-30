function successfulXML(){
    let data = document.getElementById("request-data");
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users/freiNbasya")
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            let response = JSON.parse(request.responseText);
              if (request.status === 200) {
                 data.textContent = response;
              } 
          }
    
    };
    request.send()
}

function failureXML(){
    let data = document.getElementById("request-data");
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.github.com/users/freiNooooooobbbbasya")
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            let response = JSON.parse(request.responseText);
              if (request.status === 200) {
                 data = response;
              }else{
                data.textContent = "Wrong url"
              }
          }
    
    };
    request.send()
}