import { dinoData } from './helpers/data/dinoData.js';
import { buildForm, addDinoToKennel } from './components/dinoForm.js';
import { showCards } from './components/dinoCards.js';

const init = () => {
    buildForm();
    showCards(dinoData());
    addDinoToKennel();
}

init();