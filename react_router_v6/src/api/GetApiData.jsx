// https://www.omdbapi.com/?i=tt3896198&apikey=b7477d51&s=titanic&page=1;

export const getMoviesData = async() =>{
    try{
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

// this is a function not a component see the name all words are not in capital 

