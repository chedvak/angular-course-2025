import { Component } from '@angular/core';
import { TruncatePipe } from "../truncate-pipe";
import { Highlight } from "../highlight";

@Component({
  selector: 'app-pipe-usage',
  imports: [TruncatePipe, Highlight],
  templateUrl: './pipe-usage.html',
  styleUrl: './pipe-usage.css'
})
export class PipeUsage {


  text = "This is a longer piece of text that will be truncated in the UI ";

}
