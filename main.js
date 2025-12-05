//********** */ new***************

// faire descendre le burger 
 
//  const toggle = document.getElementById("burgerToggle");
// const content = document.getElementById("burgerContent");

// toggle.addEventListener("click", () => {
//   content.style.display = content.style.display === "none" ? "block" : "none";
// });



// Annimation section compétence*******************

// // 1. On cible le lien vers la section "compétence"
//   const lienCompetence = document.querySelector('a[href="#competence"]');

//   // 2. On cible les barres individuelles
//   const barreHtmlCss = document.querySelector('.skillsHtmlcss');
//   const barreJs = document.querySelector('.skillsJs');
//   const barrePhp = document.querySelector('.skillsPhp');

//   lienCompetence.addEventListener('click', function () {
//     // Délai pour laisser le temps au scroll d'arriver à la section
//     setTimeout(() => {
//       // Supprimer les animations si elles existent déjà (pour pouvoir les rejouer)
//       barreHtmlCss.classList.remove('animhtmlcss');
//       barreJs.classList.remove('animJS');
//       barrePhp.classList.remove('animPhp');

//       // supprimer la classe puis la rajouter ne suffit pas toujours.
//     // Pourquoi ? Parce que le navigateur est trop rapide 
//     // on reset  animation et on relance ;'animation on redémarre bien à zéro)

//       void barreHtmlCss.offsetWidth;
//       void barreJs.offsetWidth;
//       void barrePhp.offsetWidth;

//       // Ajouter les classes d'animation
//       barreHtmlCss.classList.add('animhtmlcss');
//       barreJs.classList.add('animJS');
//       barrePhp.classList.add('animPhp');
//     }, 500); // 0.5s pour laisser le scroll se faire
//   });



// // Ajouter une animation au scroll Aussi
// // il y a une animation sur les barres de compétences 


//   // Récupérer la section
//   const sectionCompetence = document.getElementById('competence');

//   // Récupérer les barres par ID
  

//   // Variable pour éviter de relancer l'animation plusieurs fois
//   let animationDejaLancee = false;

//   // Surveille le scroll
//   window.addEventListener('scroll', function () {
//     const positionSection = sectionCompetence.getBoundingClientRect().top;
//     const hauteurFenetre = window.innerHeight;

//     // Si la section est visible et l'animation pas encore lancée
//     if (positionSection < hauteurFenetre * 0.8 && !animationDejaLancee) {
//       barreHtmlCss.classList.add('animhtmlcss');
//       barreJs.classList.add('animJS');
//       barrePhp.classList.add('animPhp');

//       animationDejaLancee = true;
//     }
//   });





//   // Faire évoluer le pourcentage contenu dans les barres

//   function animPourcent(){
//     // selection de tous les skills 
//     // Attention avec le querySelectorAll on récupère un tabbleau avec Tou
//     // Les éléments qui on la class '.skills'
//     // Et comment on fait pour parcourir un tableau ?
//     // On n'a pas le choix on doit faire une boucle 
//     let skills = document.querySelectorAll(' .skills')
//     console.log(skills);
    
//   }
// animPourcent()




//********** */ new***************
