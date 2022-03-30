class UnsplashApi{
    constructor(){
        this.baseURL="https://api.unsplash.com";
        this.clientId="Client-ID Isfn3QUz8yA9Pc5IJZYyb7rB6J-_-tcYaMrYZHGU428";
        this.axiosNesnesi=axios.create({
            baseURL: this.baseURL,
            headers:{
                Authorization:this.clientId,
            },
            params:{
                query:"computer",
                count:1,
             

            }
        })
    }
    async  resimGetir() {
    try {
       
        const resimResponse= await this.axiosNesnesi.get("/photos/random");
      
        return resimResponse.data[0].urls.regular;
    } catch (error) {
        console.log(error)
    }
    }
}