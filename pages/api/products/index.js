import prisma from "../../../lib/prisma"

export default async function getAll(req,res){
    const products = await prisma.product.findMany()

    return res.json(products)
}