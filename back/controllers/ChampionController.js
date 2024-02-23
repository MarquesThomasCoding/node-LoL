import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getChampions = (req, res) => {
    prisma.champion.findMany()
    .then((champions) => {
        res.json(champions)
    })
    .catch((error) => {
        res.json(error)
    })
}

export { getChampions }