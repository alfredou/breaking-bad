
export const Consulta =(name='')=>{
const host =`https://www.breakingbadapi.com/api/characters?name=${name}`; 
return(
fetch(host,{
  method: 'get',
  headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
  }
})
.then(res=>res.json())
.then(res=>{
  if(Array.isArray(res)){
       const episodes = res.map(el => {
        const {char_id, img, name, nickname, occupation, status} = el; 
        return {char_id, img, name, nickname, occupation, status}; 
      })
      return episodes; 
    }
  })  
)}