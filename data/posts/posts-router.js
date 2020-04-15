const express = require('express');
const db = require('../db');

const router = express.Router();

// Returns all post
router.get('/', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Could not find posts'
            })
        })
})

//Retrieving post by id
router.get('/:id', (req, res) => {
    const id = req.params.id
    db.findById(id)
        .then(([post]) => {
            console.log(post)
            if(post) {
                res.status(200).json(post)
            }else {
                res.status(404).json({
                    message: 'Post not found'
                })
            }   
        })
        .catch(err => {
            res.status(500).json({
                message: 'Can not retrieve post'
            })
        })
})

//Retrieving comments on post by id
router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    db.findPostComments(id)
        .then(post => {
            console.log(post)
            if(post) {
                res.status(200).json(post)
            }else(
                res.status(404).json({
                    message: 'Post not found'
                })
            )
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Could not find post'
            })
        })
})



module.exports = router
