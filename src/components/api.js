import axios from "axios"

export const fetchPost = async () =>{
        return axios.get("http://localhost/3006/quote/").
        then((res)=>res.data)
}
export const fetchSinglePost = async (id)=>{
   return axios
     .get(`http://localhost/3006/api/quote/${id}`)
     .then((res) => res.data);
}
export const creatingPost = async ({quotation,author})=>{
    return await axios
      .post("http://localhost/3006/api/quote/create", {
        quotation,
        author,
      })
      .then((res) => res.data);
}
