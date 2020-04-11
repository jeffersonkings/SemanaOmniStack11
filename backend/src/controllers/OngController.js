const crypto = require('crypto');
const connection = require('../database/connection');

module.exports =  
{
    async index(Request, Response)
   {
     const ongs = await connection('ongs').select('*');
      console.log(ongs);
     return Response.json(ongs);
   },

   async create(Request, Response){
     const{ name, email, whatsapp, city, uf } = Request.body;
      const id = crypto.randomBytes(4).toString('HEX'); 
      await connection('ongs').insert(
      {
       id,
       name,
       email,
       whatsapp,
       city,
       uf
      })  
      
      return Response.json({ id });
       
   }
};