import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProduitsService } from '../services/produits/produits.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit{
  newProduct: Products = new Products();
  imageFiles: { [key: string]: File } = {};
  images : any[] = []
  index = 0
  selectedProduct: any;
  constructor(private produitservice : ProduitsService,private dataService: DataService) {
    this.selectedProduct = this.dataService.getSelectedProduct();
  }
  ngOnInit(): void {
    console.log('selectedProduct',this.selectedProduct)
    this.setData(this.selectedProduct)

  }
   
  setData(selectedProduct : any){
    this.newProduct.id_product = selectedProduct.id_product;
    this.newProduct.name = selectedProduct.name;
    this.newProduct.price = selectedProduct.price;
    this.newProduct.qt_stock = selectedProduct.qt_stock;
    this.newProduct.image1 = selectedProduct.image1;
    this.newProduct.image2 = selectedProduct.image2;
    this.newProduct.image3 = selectedProduct.image3;
    this.newProduct.image4 = selectedProduct.image4;
    this.newProduct.description = selectedProduct.description;
  }
 
  addProduct() {
    // Prepare your newProduct object with other data
    // and handle imageFiles as needed
    console.log(this.newProduct);
    console.log(this.imageFiles); 
    this.newProduct.image1 = this.images[0]   
    this.newProduct.image2 = this.images[1]
    this.newProduct.image3 = this.images[2] 
    this.newProduct.image4 = this.images[3]
    
    if(!this.selectedProduct){
      this.produitservice.addProduct(this.newProduct).subscribe(
        res => {
          console.log('ajout de produit avec succes',this.newProduct)
        }
      )
    }else{
      this.produitservice.updateProduct(this.newProduct).subscribe(
        res => {
          console.log('result update product', res)
        }
      )
    }


    // You can send the data to the server or do something else with it
  }

  onImageChange(event: any, key: string) {
    const file = event.target.files[0];
    if (file) {
        // Récupérez le nom du fichier
        const fileName = file.name;

        console.log('fileName',fileName);

        let clé : any= key
        // Enregistrez le nom du fichier dans le tableau
        this.images[this.index] = fileName;

        // Enregistrez également le fichier dans this.imageFiles (selon votre implémentation actuelle)
        this.imageFiles[clé] = file;
        this.index ++ 
        // Affichez les noms de fichiers pour vérification (vous pouvez retirer cela ensuite)
         
    }
  }

}
