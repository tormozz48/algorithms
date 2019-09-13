class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.queen = false;
        this.covered = false;
    }

    toString() {
        return `cell: x => ${this.x + 1} y => ${this.y + 1}`;
    }
}

class Desk {
    constructor() {
        this._cells = [];
        for (let x = 0; x < this.SIZE; x++) {
            this._cells[x] = [];
            for (let y = 0; y < this.SIZE; y++) {
                this._cells[x][y] = new Cell(x, y);
            }
        }
    }

    get SIZE() {
        return 8;
    }

    getCell(x, y) {
        return this._cells[x][y];
    }
}

class App {
    constructor() {
        this._queensTarget = 8;
        this._desk = new Desk();
    }

    run(queens = []) {
        if (!this._isLegalPosition(queens)) {
            return false;
        }

        if(queens.length === this._queensTarget) {
            return queens;
        }

        for (let x = 0; x < this._desk.SIZE; x++) {
            for (let y = 0; y < this._desk.SIZE; y++) {
                const cell = this._desk.getCell(x, y);
                if (cell.queen) {
                    continue;
                }

                cell.queen = true;
                queens.push(cell);

                if (this.run(queens)) {
                    return queens;
                } else {
                    cell.queen = false;
                    queens.pop(cell);
                }
            }
        }

        return false;
    }

    _isLegalPosition(queens) {
        let isValid = true;

        for (let i = 0; i < queens.length; i++) {
            if (isValid === false) {
                break;
            }

            for (let j = i + 1; j < queens.length; j++) {
                const dx = Math.abs(queens[i].x - queens[j].x);
                const dy = Math.abs(queens[i].y - queens[j].y);
                if (dx === 0 || dy === 0 || dx === dy) {
                    isValid = false;
                    break;
                }
            }
        }

        return isValid;
    }
}

console.time('start');
const app = new App();
const result = app.run();
console.timeEnd('start');

console.info(result.map((cell) => cell.toString()));