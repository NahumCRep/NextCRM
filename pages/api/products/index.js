import prisma from "../../../lib/prisma"
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

export default async function getAllProducts(req,res){
    const products = await prisma.product.findMany()
    return res.json(products)
}