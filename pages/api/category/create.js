import prisma from "../../../lib/prisma";

export default async function(req,res){
    if(req.method==="POST"){
        const category = await prisma.category.create({
            data:req.body
        })

        return res.json(category)
    }

}