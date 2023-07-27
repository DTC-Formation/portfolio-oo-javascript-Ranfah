 let tablinks = document.getElementsByClassName("tab-links")
 let tabcontents = document.getElementsByClassName("tab-contents")

 let user = {
    pseudo: "@Ranfah",
    competences : [
        {
            poste: "Web Devellopeur",
            technos: "HTML/CSS/Javascript"
        },
        {
            poste: "Designer",
            technos: "Photoshop/Illustrator"
        },
    ],
    Experiences : [
        {
            poste: "Devellopeur Web",
            taf: "Création d'une application web pour cacher des informations personnelles dans un fichier PDF",
            dateDebut: "Juin 2021",
            dateFin: "Novembre 2021"
        },
        {
            poste: "Devellopeur",
            taf: "Création d’une application desktop,pour la gestión d’une fiche d’analyse medicale",
            dateDebut: "Janvier 2018",
            dateFin: "Mars 2018"
        }
    ],
    Etudes : [
        {
            diplome: "Master",
            anneeDebut: "2020",
            anneeFin: "2022",
            ecole: "IS INFO AMPASAMADINIKA"
        },
        {
            diplome: "Licence",
            anneeDebut: "2015",
            anneeFin: "2018",
            ecole : "ISIME Behoririka"
        }
    ],
    Contact : {
        LinkedIn:"https://www.linkedin.com/in/faniry-randy-28b5b9221",
        Facebook: "https://web.facebook.com/randianiaina.yrinaftouloucha",
        Github: "https://github.com/Ranfah",
        Telephone: "+261 34 10 602 46",
        Mail: "faniryran01@gmail.com"
    }
 }

 let sidemenu = document.getElementById('sidemenu')

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("tab-active")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("tab-active")
 }

 function openmenu(){
    sidemenu.style.right="0"
 }
 function closemenu(){
    sidemenu.style.right="-100px"
 }

 let toggleSwitch = document.querySelector("input");

toggleSwitch.addEventListener("change", (e) => {
  let body = document.querySelector("body")
  let links_as = document.querySelectorAll('a')
  let p_colors = document.querySelectorAll('p')
  let h1_colors = document.querySelectorAll('h1')
  let spans = document.querySelectorAll('span')
  let li_colors = document.querySelectorAll('li')
  let boutons = document.querySelectorAll('button')
  let i_colors = document.querySelectorAll('i')
  let dark_display = document.getElementsByClassName('D')
  let list_display = document.getElementsByClassName('L')
  let background_label= document.getElementById("label_id")
  let img_cage = document.querySelectorAll('img')
  let header_background = document.getElementById('header')
  if (e.target.checked) {
    body.style.backgroundColor = "#f0f0f0";
    background_label.style.backgroundColor ="#f0f0f0"
    for(links_a of links_as){
        links_a.style.color="#000"
    }
    links_as[9].style.color="#fff"
    links_as[10].style.color="#fff"
    links_as[11].style.color="#fff"
    for(p_color of p_colors){
        p_color.style.color="#000"
    }
    for(h1_color of h1_colors){
        h1_color.style.color="#000"
    }
    for(li_color of li_colors){
        li_color.style.color="#000"
    }
    for(bouton of boutons){
        bouton.style.color="#000"
    }
    p_colors[8].style.color="#fff"
    p_colors[9].style.color="#fff"
    p_colors[10].style.color="#fff"
    i_colors[0].style.color="#000"
    i_colors[1].style.color="#000"
    dark_display[0].style.display="block"
    list_display[0].style.display="none"
    img_cage[1].src="./images/1_d.png"
    img_cage[2].src="./images/2_d.png"
    img_cage[3].src="./images/3_d.png"
    spans[3].style.display="block"
    spans[4].style.display="none"
    header_background.style.backgroundImage = 'url("/images/backgrounddark.png")'
  } else {
    body.style.backgroundColor = "#050505";
    background_label.style.backgroundColor ="#050505"
    for(links_a of links_as){
        links_a.style.color="#fff"
    }
    for(p_color of p_colors){
        p_color.style.color="#fff"
    }
    for(h1_color of h1_colors){
        h1_color.style.color="#fff"
    }
    for(li_color of li_colors){
        li_color.style.color="#fff"
    }
    for(bouton of boutons){
        bouton.style.color="#fff"
    }
    i_colors[0].style.color="#fff"
    i_colors[1].style.color="#fff"
    list_display[0].style.display="block"
    dark_display[0].style.display="none"
    img_cage[1].src="./images/1.png"
    img_cage[2].src="./images/2.png"
    img_cage[3].src="./images/3.png"
    spans[3].style.display="none"
    spans[4].style.display="block"
    header_background.style.backgroundImage = 'url("/images/background_1.png")'
  }
});

let liHtml = document.querySelectorAll('li');
let pHtml = document.querySelectorAll('p')

liHtml[5].innerHTML = "<span>"+user.competences[0].poste+"</span>" +"<br>"+user.competences[0].technos
liHtml[6].innerHTML = "<span>"+user.competences[1].poste+"</span>" +"<br>"+user.competences[1].technos
liHtml[7].innerHTML = "<span>"+user.Experiences[0].poste+"</span>" +"<br>"+user.Experiences[0].taf
liHtml[8].innerHTML = "<span>"+user.Experiences[1].poste+"</span>" +"<br>"+user.Experiences[1].taf
liHtml[9].innerHTML = "<span>"+user.Etudes[0].diplome+"</span>" +"<br>"+user.Etudes[0].anneeDebut+" - "+user.Etudes[0].anneeFin +"<br>" + user.Etudes[0].ecole
liHtml[10].innerHTML = "<span>"+user.Etudes[1].diplome+"</span>" +"<br>"+user.Etudes[1].anneeDebut+" - "+user.Etudes[1].anneeFin +"<br>" +user.Etudes[1].ecole

pHtml[11].innerHTML = "<i class='fa-solid fa-envelope'>" + user.Contact.Mail
pHtml[12].innerHTML = "<i class='fa-solid fa-phone'>" + user.Contact.Telephone
