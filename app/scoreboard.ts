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
    let output: string = "";

    for (let i = 0; i < this.results.length; i++) {
      const result: Result = this.results[i];
      if (result.totalTime !== null) {
      output += `${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor} in ${result.totalTime} seconds`;
      } else {
        output += `${result.playerName} : ${result.score} / ${result.problemCount} for factor ${result.factor}`;
      }
    }

    const scoresElement: HTMLElement = document.getElementById("scores")!;
    scoresElement.innerHTML = output;
  }
}
