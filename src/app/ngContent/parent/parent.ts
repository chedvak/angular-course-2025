import { Component } from '@angular/core';
import { Card } from "../card/card";
import { ResizeText } from "../../resize-text";
import { TruncatePipe } from '../../truncate-pipe';

@Component({
  selector: 'app-parent',
  imports: [Card, ResizeText, TruncatePipe],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {

}
