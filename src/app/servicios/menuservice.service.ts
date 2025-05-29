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
      cubierto: string;
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
      const data = await fetch(`${this.url+"platos"}/${ id}`);
      return (await data.json()) ?? {};
    }
}
