import { ColormapComponent } from './colormap.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ColormapComponent],
  imports: [CommonModule,   BrowserAnimationsModule],
  exports: [ColormapComponent]
})
export class EasyComponentColormapModule {}
