import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/steam',
    passport.authenticate('steam'),
    function (req, res) {
        // The request will be redirected to Steam for authentication, so
        // this function will not be called.
    });

router.get('/steam/return',
    passport.authenticate('steam', { failureRedirect: '/login' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

export default router