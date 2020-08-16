import { Result } from "./result";
import * as _ from "lodash";

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
    let allCapsName: string = _.upperCase(newResult.playerName);
    console.log(`${allCapsName}: ${newResult.score}`);
  }

  updateScoreboard(): void {
    let output: string = "<h2>Scoreboard</h2>";

    for (let i = 0; i < this.results.length; i++) {
      const result: Result = this.results[i];
      output += `<h4> ${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor} </h4>`;
    }

    const scoresElement: HTMLElement = document.getElementById("scores")!;
    scoresElement.innerHTML = output;
  }
}
