export const HeaderConfig =  {
     base_url : "http://localhost:8080/music",
    api_key : process.env.EXPO_PUBLIC_API_KEY,
    header: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,

    }
}
// https://api.themoviedb.org/3
// const end_url = search_query
//     ? `${HeaderConfig.base_url}/search/movie?query=${encodeURIComponent(search_query)}`
//     : `${HeaderConfig.base_url}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
export const Fetchmovies=async ({search_query}:{search_query: string})=>{


    const end_url = search_query
        ? `${HeaderConfig.base_url}/find?albumName=${encodeURIComponent(search_query)}`
            : `${HeaderConfig.base_url}/Song`;


    const response = await fetch(end_url, {
        method: "GET",
        headers: HeaderConfig.header,

    })
    if(!response.ok){
        console.log("error is from here buddy: "+response.statusText)
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return data.results;
}