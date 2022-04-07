import prisma from "../../../lib/prisma"

export default async function one(req,res){
    const product = await prisma.product.findFirst({
        where:{
            id:req.query.id
        }
    })

    return res.json(product)
}