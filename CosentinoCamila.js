class Usuario {
constructor(nombre,apellido,libros,mascotas){
this.nombre = nombre
this.apellido = apellido
this.libros = libros
this.mascotas = mascotas

}
getFullName(){
    return `${this.nombre} ${this.apellido}`
}
addMascotas(pet){

 this.mascotas.push(pet)

}
countMascotas(){
return this.mascotas.length;
}
addBook(name,autor){
this.libros.push({name,autor})



}
getBooks(){
  let arr = []
this.libros.map(nomb => {
  arr.push(nomb.name)
})
return arr

}
 }
 


const user = new Usuario("Camila","Cosentino",
[],["Lana","Elliot","Casper"])
user.addBook("Animal Farm" , "George Orwell")
user.addBook("Aprendiendo JavaScript" , "Carlos Azaustre")
console.log(user.getFullName())
user.addMascotas("Boof")
console.log(user.countMascotas())

console.log(user.getBooks())












