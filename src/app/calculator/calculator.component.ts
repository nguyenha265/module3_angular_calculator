import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  pheptinh = '+';
  result: number;

  constructor() {
  }

  firstNumber(firstNumber) {
    this.number1 = Number(firstNumber);
  }

  lastNumber(lastNumber) {
    this.number2 = Number(lastNumber);
  }


  calculation(value) {
    this.pheptinh = value;
  }

  ketQua() {
    switch (this.pheptinh) {
      case '+':
        this.result = this.number1 + this.number2;
        break;
      case '-':
        this.result = this.number1 - this.number2;
        break;
      case 'x':
        this.result = this.number1 * this.number2;
        break;
      case '/':
        this.result = this.number1 / this.number2;
        break;
    }
  }

  ngOnInit() {
  }

}
