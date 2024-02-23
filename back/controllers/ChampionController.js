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

const getChampion = (req, res) => {
    let id = Number(req.params.id)
    prisma.champion.findUnique({
        where: {
            id: id
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

const createChampion = (req, res) => {
    let champion = req.body
    prisma.champion.create({
        data: {
            name: champion.name,
            type: champion.type,
        }
    })
    .then((champion) => {
        res.json(champion)
    })
    .catch((error) => {
        res.json(error)
    })
}

export { getChampions, getChampion, createChampion }