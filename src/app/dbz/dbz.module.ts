import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    dbzMainPageComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    dbzMainPageComponent
  ]
})
export class DbzModule { }
