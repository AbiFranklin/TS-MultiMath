const startGame = (): void => {
    let playerName: string | undefined = getInpuVariable('playername');
    postScore(5, playerName);
}

// const logPlayer = (name: string = 'MultiMath Player'): void => {
//     alert(`New game starting for player: ${name}`)
// }

const getInpuVariable = ( elementID: string): string | undefined => {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value
    }
}

const postScore = (score: number, playerName: string = 'MultiMathPlayer'): void => {
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`)
}

const logError = (err: string): void => {
    console.log(`ERROR: ${err}`)
}

const logMessage = (message: string): void => console.log(`MESSAGE: ${message}`)

document.getElementById('startGame')?.addEventListener('click', startGame)
