import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAppointmentPageRoutingModule } from './edit-appointment-routing.module';

import { EditAppointmentPage } from './edit-appointment.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditAppointmentPageRoutingModule
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}
export class MakeAppointmentPageModule { }
