import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-iframe-view',
  templateUrl: './iframe-view.component.html',
  styleUrls: ['./iframe-view.component.scss']
})
export class IframeViewComponent implements OnInit {

  yt = '<iframe style="width: 100%; height: 500px; background-color: rgba(0,0,255,0.1);" src="http://localhost:4200/index" frameborder="10" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  editable = true;

  @ViewChild('myDiv') myDiv: ElementRef;

  content = `<button 
    (click)="onClick()">
    This is a Clickable span
  </button>`;


  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.myDiv.nativeElement, 'innerHTML', this.content);
  }

  onClick() {
    console.log('Clicked!!!');
    alert('clicked!!!!');
  }

}
