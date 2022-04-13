import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/products', async (req, res) => {
    const { searchString, take, skip } = req.query

    const or: Prisma.ProductWhereInput = searchString
    ? {
        OR: [
          { category: { contains: searchString as string } },
          { manufacturer: { contains: searchString as string } },
        ],
      }
    : {}

    const products = await prisma.product.findMany({
        where: {
            ...or
        },
        take: Number(take) || undefined,
        skip: Number(skip) || undefined,
    }) 
    
    res.json(products)
})

app.get('/products/:id', async (req, res) => {

    const { id }: {id?: string } = req.params
    
    const product = await prisma.product.findUnique({
        where: { id: Number(id)}
    })

    res.json(product)
})

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See docs: https://github.com/zacjones93/Storefront-UI-Project#%EF%B8%8F-using-the-server-rest-api`),
)