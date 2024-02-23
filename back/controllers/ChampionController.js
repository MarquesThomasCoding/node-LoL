import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import championData from '../champions.json' assert { type: "json" }

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
    const token = req.headers['x-access-token']
    if(!token) {
        window.location.href = 'index.html'
        return res.json({ error: 'No token provided' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: 'Failed to authenticate token' })
        }
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
    })
}

const insertChampions = (req, res) => {
    const token = req.headers['x-access-token']
    if(!token) {
        window.location.href = 'index.html'
        return res.json({ error: 'No token provided' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: 'Failed to authenticate token' })
        }
        let champions = championData
        prisma.champion.createMany({
            data: champions
        })
        .then((champions) => {
            res.json(champions)
        })
        .catch((error) => {
            res.json(error)
        })
    })
}

const deleteChampion = (req, res) => {
    const token = req.headers['x-access-token']
    if(!token) {
        return res.json({ error: 'No token provided' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: 'Failed to authenticate token' })
        }
        let id = Number(req.params.id)
        prisma.champion.delete({
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
    })
}

const updateChampion = (req, res) => {
    const token = req.headers['x-access-token']
    if(!token) {
        window.location.href = 'index.html'
        return res.json({ error: 'No token provided' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: 'Failed to authenticate token' })
        }
        let id = Number(req.params.id)
        let champion = req.body
        prisma.champion.update({
            where: {
                id: id
            },
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
    })
}

export { getChampions, getChampion, createChampion, deleteChampion, updateChampion, insertChampions }