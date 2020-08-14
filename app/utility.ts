class Utility {
    static getInputVariable (elementID: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
}