import { Component, OnInit } from '@angular/core';
import { CommandesService } from '../services/commandes/commandes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit{

  commandes : any

  constructor(private commandesService : CommandesService,private toastr: ToastrService){}
  ngOnInit(): void {
    this.getCommandes()
  }
  showSuccessToast() {
    this.toastr.success('Commande supprimée avec succès', 'Succès');
  }
  getCommandes(){
    this.commandesService.getCommandes().subscribe(
      res => {
        this.commandes = res
        console.log('liste des commandes ', res)
      }
    )
  }
}
