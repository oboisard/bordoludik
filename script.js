const form = document.querySelector('form');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Vérifier que les champs sont remplis
  if (nom.value === '' || email.value === '' || message.value === '') {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Envoyer les données du formulaire à un serveur
  const formData = new FormData();
  formData.append('nom', nom.value);
  formData.append('email', email.value);
  formData.append('message', message.value);

  // Remplacez l'URL ci-dessous par l'URL de votre serveur qui gère le formulaire
  fetch('https://votre-serveur.com/traitement-formulaire', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Votre message a été envoyé avec succès.');
      form.reset();
    } else {
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
    }
  })
  .catch(error => {
    alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.');
  });
});

