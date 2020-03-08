import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SepultadosService} from '../../services/sepultados.service';
import { NavController } from '@ionic/angular';
import {OverlayService} from 'src/app/core/services/overlay.service';
import {ActivatedRoute} from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sepultados-save',
  templateUrl: './sepultados-save.page.html',
  styleUrls: ['./sepultados-save.page.scss'],
})
export class SepultadosSavePage implements OnInit {

sepultadosForm: FormGroup;
pagedescricao: string;
sepultadoId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private sepultadosService: SepultadosService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
   const sepultadoId = this.route.snapshot.paramMap.get('id');
   if (!sepultadoId) {
     this.pagedescricao = 'Cadastrar sepultado';
     return;
   }
   this.sepultadoId = sepultadoId;
   console.log('sepultadoId' , sepultadoId);
   this.pagedescricao = 'editar tarefa';
   this.sepultadosService
   .get(sepultadoId)
   .pipe(take(1))
   .subscribe(({nome, pai, mae, dataNasc, dataFal, idade, cemiterio, placa,
     quadra, rua, descricao, done}) => {
    this.sepultadosForm.get('nome').setValue(nome);
    this.sepultadosForm.get('done').setValue(done);

    this.sepultadosForm.get('pai').setValue(pai);
    this.sepultadosForm.get('mae').setValue(mae);

    this.sepultadosForm.get('dataNasc').setValue(dataNasc);
    this.sepultadosForm.get('dataFal').setValue(dataFal);

    this.sepultadosForm.get('idade').setValue(idade);
    this.sepultadosForm.get('cemiterio').setValue(cemiterio);

    this.sepultadosForm.get('placa').setValue(placa);
    this.sepultadosForm.get('quadra').setValue(quadra);
    this.sepultadosForm.get('rua').setValue(rua);
    this.sepultadosForm.get('descricao').setValue(descricao);
    });
  }

  private createForm(): void {
    this.sepultadosForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      pai: [''],
      mae: [''],
      dataNasc: [''],
      dataFal: [''],
      idade: [''],
      cemiterio: ['', [Validators.required, Validators.minLength(3)]],
      placa: ['', [Validators.required, Validators.minLength(1)]],
      quadra: [''],
      rua: [''],
      descricao: [''],
      done: [false]
    });
  }
  async onSubmit(): Promise <void> {
    // chamando o loading
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
     const sepultados = !this.sepultadoId
      ?  await this.sepultadosService.create(this.sepultadosForm.value)
      : await this.sepultadosService.update({
        id: this.sepultadoId,
        ...this.sepultadosForm.value
      });
     console.log('salvo' , sepultados);
     this.navCtrl.navigateBack('/sepultados');
   } catch (error) {
     console.log('erro ao salvar a tarefa', error);
     await this.overlayService.toast({
      message: 'erro ao salvar a tarefa: ' + error
     });
   } finally {
     loading.dismiss(); // encerrando o loading
   }
  }
}
