class JokeApi{
    constructor(){
        this.baseURL="https://api.chucknorris.io";
        this.axiosNesnesi=axios.create({
            baseURL: this.baseURL,
        })
    }
    async  sakauret() {
      try {
        const sakaResponse= await this.axiosNesnesi.get("/jokes/random");
       // console.log( sakaResponse.data.value);
        return sakaResponse.data.value;
      } catch (error) {
        console.log(error)
      }
      
    }
}


