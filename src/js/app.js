console.log('app worked');

//const game = new Game();
//game.start();

///В модуле app.js одним импортом импортируйте Game, GameSavingData и функции readGameSaving, writeGameSaving (их при импорте переименуйте в loadGame и saveGame соответственно)
import game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';
//console.log(saveGame);

//здесь мы, получается, импортировали экземпляр класса из game. Это правильно?
game.start();