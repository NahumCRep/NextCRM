import prisma from "../../../lib/prisma"

export default async function getAllCategories(req,res){
    const categories = await prisma.category.findMany()

    return res.json(categories)
}