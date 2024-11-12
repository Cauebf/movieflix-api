import { Router } from 'express';
const router = Router();

const { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');

router.route('/').get(getAllMovies).post(createMovie)
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)

module.exports = router;
