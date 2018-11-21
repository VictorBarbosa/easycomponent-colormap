import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SetColor } from './SetColor';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'easy-colormap',
  templateUrl: './colormap.component.html',
  styleUrls: ['./colormap.component.css'],

  animations: [
    trigger('mapTrigger', [
      state(
        'hide',
        style({
          'margin-left': 'auto',
          'margin-right': 'auto',
          position: 'absolute',
          width: '237px',
          top: '25%',
          left: '0',
          right: '0',
          display: 'none',
          'z-index': -999,
          opacity: 0
        })
      ),
      state(
        'show',
        style({
          'margin-left': 'auto',
          'margin-right': 'auto',
          position: 'absolute',
          width: '237px',
          top: '25%',
          left: '0',
          right: '0',
          opacity: '1'
        })
      ),
      transition('hide=>show', [animate('1s')]),
      transition('show=>hide', [animate('1s')])
    ])
  ]
})
export class ColormapComponent implements OnInit {
  mapTrigger = 'hide';
  allColors: SetColor = new SetColor().ListColor;
  colorSelected: string;
  @Output('setColor') setColor = new EventEmitter();

  FadeInColorMap() {
    this.mapTrigger = 'show';
  }
  private FadeOutColorMap() {
    this.mapTrigger = 'hide';
  }
  ngOnInit() {}
  clickColor(color: string): void {
    this.FadeOutColorMap();
    this.setColor.emit(color);
  }
}
