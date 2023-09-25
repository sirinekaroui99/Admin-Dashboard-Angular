import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private apiUrl = 'http://localhost:8081/SpringMVC/servlet';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.apiUrl}/products`)
  }

   // Récupérer un produit par son ID depuis le backend
   getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}/products/${id}`);
  }

  // Ajouter un produit en utilisant une requête POST au backend
  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.apiUrl}/AjouterProduct`, product);
  }

  // Mettre à jour un produit en utilisant une requête PUT au backend
  updateProduct(product: Products): Observable<Products> {
    console.log('update', product)
    return this.http.put<Products>(`${this.apiUrl}/UpdateProduct`, product);
  }

  deleteProduct(id_product: Products): Observable<Products> {
    return this.http.delete<Products>(`${this.apiUrl}/DeleteProduct/${id_product}`);
  }

  
}
