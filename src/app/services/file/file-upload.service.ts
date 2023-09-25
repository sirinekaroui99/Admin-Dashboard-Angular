import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  private imageInfo: { [key: string]: string } = {};

  storeImageInfo(key: string, fileName: string) {
    this.imageInfo[key] = fileName;
  }

  getImageInfo(key: string): string {
    return this.imageInfo[key];
  }
}
