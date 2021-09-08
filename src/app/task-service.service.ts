import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class TaskServiceService {

  getAll(){
    return [new Task("tache1"), new Task("tache2")]
  }

}
export class Task{
  public libelle: string;
  public test: boolean = false;

  constructor(libelle : string) { 
    this.libelle = libelle;
  }

  done(){
    this.test = !this.test;
}
}
