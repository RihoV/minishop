import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooted',
  templateUrl: './tooted.component.html',
  styleUrls: ['./tooted.component.css']
})
export class TootedComponent implements OnInit {
  tooted = [
    {name: "Boots", price: 300, color: "white"},
    {name: "Shirts", price: 100, color: "black"},
    {name: "Hat", price: 30, color: "red"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
