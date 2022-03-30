class Ekran{

    constructor(){

        this.sakaGetir=document.getElementById("btn");
        console.log(this.sakaGetir)
        this.sakaGetir.addEventListener("click",()=>this.sakaGetir())

    }

    async sakaGetir(){
        console.log(this)
    }
}

const yeni=new Ekran();
console.log("ekran")
