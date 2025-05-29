import { Injectable } from '@angular/core';
import { apiServer } from '../../apiService';

export interface ObjMenu{
      idplato: number;
      nombre: string;
      precio: number;
      descuento: number;
      descripcion: string;
      imagen: string;
      info: string;
      tipo: string;
      cubiertos: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor() { }
  url="http://localhost:3000/";
      async getAllProducts(): Promise<ObjMenu[]> {
      const data = await fetch(this.url+"platos");
      return (await data.json());
    }
    async getProductsbyID(id: number): Promise<ObjMenu | undefined> {
      const data = await fetch(`${this.url}platos?idplato=${id}`);
      const result = await data.json();
      // Si la API devuelve un array, retorna el primer elemento
      return Array.isArray(result) ? result[0] : result;
    }
}
