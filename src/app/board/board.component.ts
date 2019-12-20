import { Component, OnInit } from '@angular/core';
import { winningLines } from '../utils/data';
import { isEquals } from '../utils/utils';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xPlayer: boolean;
  winner: string;
  winningSquares: any[];

  constructor() { }

  ngOnInit() {
    this.playGame();
  }

  playGame() {
    this.squares = [...new Array(9).fill(null)];
    this.winner = null;
    this.xPlayer = Math.random() >= 0.5;
    this.winningSquares = [];
  }

  currentPlayer() {
    return this.xPlayer ? 'X' : 'O';
  }

  play(index: number) {
    if(this.winner) return;
    if( !this.squares[index]) {
      this.squares.insert(index, this.currentPlayer());
      this.xPlayer = !this.xPlayer;
    }
    this.winner = this.calculateWinner();
  }

  isEmpty() {
    let count = 0;
    this.squares.forEach(item => {
      if (item !== null ) count += 1;
    });
    return count;
  }

  calculateWinner() {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (isEquals(this.squares[a], this.squares[b], this.squares[c])) {
        this.winningSquares = [a, b, c];
        return this.squares[a];
      }
    }
    return null;
  }
}
