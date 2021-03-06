import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './consulta/consulta.component';
import { FormularioComponent } from './formulario/formulario.component';
import { UsuarioRouting } from './usuario.routing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms'
import {
  MatTableModule,
  MatIconModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { UsuarioService } from './usuario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UsuarioRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [ConsultaComponent, FormularioComponent],
  providers: [
    UsuarioService,
    FormBuilder,
    HttpClient
  ]
})
export class UsuarioModule { }
