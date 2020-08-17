import { getValue } from './utility';
import { Result } from './result';
import { Player } from './player';
import { Scoreboard as ResultPanel } from './scoreboard';

export class GameOne {
  private scoreboard: ResultPanel = new ResultPanel();

  constructor(public player: Player, public problemCount: number, public factor: number) {
  }  

  displayGame(): void {

    let gameForm: string = '';
    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += '<div class="form-group" style="width: 25%; display: flex; justify-content: center">';
      gameForm += '<label for="answer' + i + '" class="control-label">';
      gameForm += String(this.factor) + ' x ' + i + ' = </label>';
      gameForm += '<div style="width: 40%; margin-left: 5px;"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
      gameForm += '</div>';
    }

    const gameElement: HTMLElement = document.getElementById('game')!;
    gameElement.innerHTML = gameForm;

    document.getElementById('calculate')!.removeAttribute('disabled');
  }
  
  calculateScore(): void {

    let score: number = 0;

    for (let i = 1; i <= this.problemCount; i++) {
      const answer: number = Number(getValue('answer' + i));
      if (i * this.factor === answer) {
        score++;
      }
    }

    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
      totalTime: null
    };

    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }  
}

export class GameTwo {
  private scoreboard: ResultPanel = new ResultPanel();

  constructor(public player: Player, public problemCount: number, public factor: number, public factorArray: number[]) {
  }  

  private startTime : number;
  private endTime: number;

  displayGame(): void {
    for (let i = 1; i <= this.problemCount; i++) {
      this.factorArray.push(Math.floor(Math.random() * 12) + 1)
    }
    
    let time: Date = new Date();
    this.startTime = time.getTime();

    let gameForm: string = '';
    for (let i = 0; i < this.problemCount; i++) {
      gameForm += '<div class="form-group" style="width: 25%; display: flex; justify-content: center">';
      gameForm += '<label for="answer' + i + '" class="control-label">';
      gameForm += String(this.factor) + ' x ' + String(this.factorArray[i]) + ' = </label>';
      gameForm += '<div style="width: 40%; margin-left: 5px;"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
      gameForm += '</div>';
    }

    const gameElement: HTMLElement = document.getElementById('gameTwo')!;
    gameElement.innerHTML = gameForm;

    document.getElementById('calculate')!.removeAttribute('disabled');
  }
  
  calculateScore(): void {

    let score: number = 0;
    let time: Date = new Date();
    this.endTime = time.getTime();
    let totalTime: number = Number(((this.endTime - this.startTime)/1000).toFixed(1))

    if (document.getElementById('startGame')) {
    for (let i = 1; i <= this.problemCount; i++) {
      const answer: number = Number(getValue('answer' + i));
      if (i * this.factor === answer) {
        score++;
      }
    }
  } else {
    console.log(this.factorArray)
    for (let i = 0; i < this.problemCount; i++) {
      const answer: number = Number(getValue('answer' + i));
      if (this.factorArray[i] * this.factor === answer) {
        score++;
      }
    }
  }

    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
      totalTime: totalTime
    };

    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }  
}