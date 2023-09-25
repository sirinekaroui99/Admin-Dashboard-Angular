import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from '../services/produits/produits.service';
import { Products } from '../models/products';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
produits : Products[] = []

constructor(private toastr: ToastrService,private router : Router, private produitservice : ProduitsService, private dataService: DataService){}
  ngOnInit(): void {
    this.getProduits()
  }

  getProduits(){
    this.produitservice.getProducts().subscribe(
      res => {
        //console.log('resultat get produits', res)
        this.produits = res
      }
    )
  }

  deleteProduct(id : any){
    console.log('id delete', id)
    this.produitservice.deleteProduct(id).subscribe(
      res => {
        this.toastr.success('Le produit supprimé avec succès', 'Succès');
        //console.log('resultat suppression produit', res)
        this.getProduits()
      }
    )
  }

  updateProduct(product : any){

    this.dataService.setSelectedProduct(product);
    this.router.navigateByUrl('/ajoutProduit')
 
  }



}
