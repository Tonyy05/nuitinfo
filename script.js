function showInfo(part) {
    const infoBox = document.getElementById('info-box');
    let infoText = '';

    switch(part) {
        case 'heart':
            infoText = `<strong>Cœur</strong> : Le cœur pompe le sang, tout comme les courants marins régulent la chaleur et l'énergie de l'océan. Dysfonctionnement : dérèglement climatique, perturbation des courants marins.`;
            break;
        case 'lungs':
            infoText = `<strong>Poumons</strong> : Les océans agissent comme des poumons pour la Terre en produisant de l'oxygène et en capturant le CO2. Dysfonctionnement : acidification des océans.`;
            break;
        case 'stomach':
            infoText = `<strong>Estomac</strong> : Les coraux filtrent et soutiennent la vie marine, comme l'estomac aide à digérer les nutriments. Dysfonctionnement : blanchissement des coraux.`;
            break;
        case 'brain':
            infoText = `<strong>Cerveau</strong> : Le cerveau contrôle des fonctions vitales, comme l'océan contrôle le climat global. Dysfonctionnement : perturbations écologiques globales.`;
            break;
        default:
            infoText = 'Cliquer sur une partie du corps pour en savoir plus.';
    }

    infoBox.innerHTML = `<h3>Informations sur le parallèle</h3><p>${infoText}</p>`;
}
