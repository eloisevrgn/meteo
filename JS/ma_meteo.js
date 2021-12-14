let reponse;

//__________fonction qui permet de faire la requete au webservice API qui va renvoyer la réponse_________________
function readVille(){
    // on fait un xml httprequest -> envoie une demande à un webservice
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // quand on reçois une réponse "fini" du notre requete
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
           reponse = xhr.responseText;
           console.log(reponse);
           reponse = JSON.parse(xhr.responseText);
           afficher_ville(); 

           
        }
    }
    //ici  l'adresse url du web service
    xhr.open('POST', 'http://api.openweathermap.org/data/2.5/weather?q='+document.getElementById("ville").value+'&units=metric&appid=1397a6656ec7ae80485511bd2a7d5df1', true);
    // toujours la même chose
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // on oublie pas d'envoyer les paramètres sous forme de chaine de caractères et non du json
    xhr.send();   

    //on vide l'input
    document.getElementById("ville").value = "";
}

//____________fonction qui permet d'afficher ma card avec les infos de la ville en cours______________________
function afficher_ville(){

    let monContenu = document.getElementById("ma_colonne2");
    monContenu.innerHTML = "";

    let row1 = ultimateHTMLGenerator("div","",["row"],monContenu)
    let ma_cole = ultimateHTMLGenerator("div","",["col"],row1)
    let ma_cole2 = ultimateHTMLGenerator("div","",["col","ma_colonne_weather"],row1)

    let ma_vignette = ultimateHTMLGenerator("div","",["card","custom-card"],ma_cole);
    let card_body = ultimateHTMLGenerator("div","",["card-body"],ma_vignette);

    let mon_titre_card = ultimateHTMLGenerator("h5",reponse.name,["card-title"],card_body);

    let ma_liste = ultimateHTMLGenerator("ul","",['list-group'],ma_vignette);

    let meteo = ultimateHTMLGenerator("li",reponse.weather[0].main,["list-group-item"],ma_liste);
    let degres = ultimateHTMLGenerator ("li","Température : "+reponse.main.temp+" degrès",["list-group-item"],ma_liste);
    let ressenti = ultimateHTMLGenerator ("li","Ressenti : "+reponse.main.feels_like+" degrès",["list-group-item"],ma_liste);
    let humidite = ultimateHTMLGenerator ("li","Taux d'humidité : "+reponse.main.humidity+" %",["list-group-item"],ma_liste);
    let visibilite = ultimateHTMLGenerator ("li","Visibilité : "+reponse.visibility+" m",["list-group-item"],ma_liste);
    let vent = ultimateHTMLGenerator ("li","Vent : "+reponse.wind.speed+" km/h",["list-group-item"],ma_liste);

  
    let mon_cont = ultimateHTMLGenerator("div","",["container"],ma_cole2);

    switch (reponse.weather[0].main) {

        case "Clear":
            let ma_div_wsun = ultimateHTMLGenerator("div","",["weather-sun"],mon_cont);
            let ma_div_sun = ultimateHTMLGenerator("div","",["sun"],ma_div_wsun);
            let ma_div_rays = ultimateHTMLGenerator("div","",["rays"],ma_div_sun);
            let ma_div_rays2 = ultimateHTMLGenerator("div","",["rays"],ma_div_sun);
            let ma_div_rays3 = ultimateHTMLGenerator("div","",["rays"],ma_div_sun);
            let ma_div_rays4 = ultimateHTMLGenerator("div","",["rays"],ma_div_sun);
        break;

        case "Clouds":
            let ma_div_wc = ultimateHTMLGenerator("div","",["weather-cloud"],mon_cont);
            let ma_div_cloud = ultimateHTMLGenerator("div","",["cloud"],ma_div_wc);
            let ma_div_cloud2 = ultimateHTMLGenerator("div","",["cloud"],ma_div_wc);
        break;
    
        case "Snow":
            let ma_div_ws = ultimateHTMLGenerator("div","",["weather-snow"],mon_cont);
            let ma_div_snow = ultimateHTMLGenerator("div","",["snow"],ma_div_ws);
            let ma_div_snow2 = ultimateHTMLGenerator("div","",["f"],ma_div_snow);
        break;
        
        case "Rain":
        case "Drizzle":
            let ma_div_wr = ultimateHTMLGenerator("div","",["weather-rain"],mon_cont);
            let ma_div_cl = ultimateHTMLGenerator("div","",["cloud"],ma_div_wr);
            let ma_div_rain1 = ultimateHTMLGenerator("div","",["rain"],ma_div_wr);
            let ma_div_rain2 = ultimateHTMLGenerator("div","",["rain"],ma_div_wr);
            let ma_div_rain3 = ultimateHTMLGenerator("div","",["rain"],ma_div_wr);
        
        break;
    }
}



/*__________________________________FONCTION ULTIMATE GENERATOR_____________________________________*/

function ultimateHTMLGenerator(typeElement,contenu,tableauClassCss,destinationElement){
    // on crer un element html donné en paramètre (1er paramètre)
    var ultimateElement = document.createElement(typeElement);
    // on attribut du contenu (paramètre 2) à l'element html précedement fabriqué
    ultimateElement.textContent = contenu;
    // on souhaite ajouter plusieurs class CSS à l'element html précedement créé
    for(var i = 0;i<tableauClassCss.length;i++){
        // on ajoute la class css contenu dans le tableau de class css passé en paramètre 3
        ultimateElement.classList.add(tableauClassCss[i]);
    }
    // on fait apparaitre l'element dans celui passé en 4ème paramètre
    destinationElement.appendChild(ultimateElement);
    return ultimateElement;
} 













