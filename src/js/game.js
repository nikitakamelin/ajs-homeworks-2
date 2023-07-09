class Game {
	start() {
	  console.log('game started');
	}
 }
//Экспорт из модуля game класса Game в качестве дефолтного
const defaultGame = new Game();
export default defaultGame;

 export class GameSavingData {
 }
 
 export function readGameSaving() {
 }
 
 export function writeGameSaving() {
 }
 //В модуле game импорт класса Character
import anyName from './domain.js';
