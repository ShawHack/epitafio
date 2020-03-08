import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sepultado} from '../../models/sepultados.model';
import { SepultadosService } from '../../services/sepultados.service';
import {NavController} from '@ionic/angular';
import {OverlayService} from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sepultado-list',
  templateUrl: './sepultados-list.page.html',
  styleUrls: ['./sepultados-list.page.scss'],
})
export class SepultadosListPage  {

  sepultados$: Observable <Sepultado[]>;

  constructor(private overlayservice: OverlayService , private navCtrl: NavController, private sepultadosService: SepultadosService ) { }

  async ionViewDidEnter(): Promise< void> {
        const loading = await this.overlayservice.loading();
        this.sepultados$ = this.sepultadosService.getAll();
        this.sepultados$.pipe(take(1)).subscribe(sepultado => loading.dismiss());
    }
    onUpdate(sepultado: Sepultado): void {
      this.navCtrl.navigateForward(`/sepultados/edit/${sepultado.id}`);
    }

    async onDelete(sepultado: Sepultado): Promise<void> {
     await this.overlayservice.alert({
       message: `Deseja realmente deletar "${sepultado.nome}"? `,
       buttons: [
         {
          text: 'Sim',
          handler: async () => {
            await this.sepultadosService.delete(sepultado);
            await this.overlayservice.toast({
              message: `Epitáfio"${sepultado.nome}" deletado`
            });
          }
         },
         'Não'
       ]
     });
    }

    async onDone(sepultado: Sepultado): Promise<void> {
      const sepultadoToUpdate = {...sepultado, done: !sepultado.done};
      await this.sepultadosService.update(sepultadoToUpdate);
      await this.overlayservice.toast({
        message: `Epitáfio "${sepultado.nome}" ${sepultadoToUpdate.done ? 'construido' : 'em reforma'}!`
      });
    }
}
