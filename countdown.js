// Définir la date de fin du compte à rebours
const countDownDate = new Date("Nov 27, 2023 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
const x = setInterval(() => {

  // Obtenir la date et l'heure actuelles
  const now = new Date().getTime();

  // Calculer la distance entre maintenant et la date de fin
  const distance = countDownDate - now;

  // Calculer les jours, heures, minutes et secondes restants
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher les éléments du compte à rebours
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si le compte à rebours est terminé, afficher "Terminé"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Terminé";
  }
}, 1000);
