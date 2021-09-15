import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { LoadingComponent } from './components/loading/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [HeaderComponent, FilterPipe, LoadingComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, FilterPipe, LoadingComponent],
})
export class CoreModule { }
