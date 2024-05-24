export class Cliente {
nombre : string | undefined;
apellido : string | undefined;
id : number | undefined;
edad : number | undefined;
cuit : number | undefined;

constructor() { 
    this.nombre = '-';

}
fullName() {
    return this.apellido + ' ' + this.nombre;
}   
edadToString() {
    return this.edad + "Años";
}
}
