import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { BadRequestError } from '../errors/';
import { NotFoundError } from '../errors/';
import { ConflictError } from '../errors';
const prisma = new PrismaClient();

const getAllMovies = async (req: Request, res: Response) => {
    const { genre } = req.query;

    const where: Prisma.MovieWhereInput =
        genre && typeof genre === 'string'
            ? {
                  genres: {
                      name: { equals: genre, mode: 'insensitive' },
                  },
              }
            : {};

    const movies = await prisma.movie.findMany({
        where,
        orderBy: { title: 'asc' },
        include: {
            genres: true,
            languages: true,
        },
    });

    if (movies.length === 0 && !genre) {
        throw new NotFoundError(`No movies found`);
    }
    if (movies.length === 0 && genre) {
        throw new NotFoundError(`No movies found with genre ${genre}`);
    }

    res.status(200).json(movies);
};

const getMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const movie = await prisma.movie.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            genres: true,
            languages: true,
        },
    });

    if (!movie) {
        throw new NotFoundError(`No job with id ${id}`);
    }

    res.status(200).json({ movie });
};

const createMovie = async (req: Request, res: Response) => {
    const { title, release_date, genre_id, language_id, oscar_count } =
        req.body;

    const movieWithSameTitle = await prisma.movie.findFirst({
        where: {
            title: {
                equals: title,
                mode: 'insensitive',
            },
        },
    });

    if (movieWithSameTitle) {
        throw new ConflictError(
            `There is already a film registered with the title ${title}`
        );
    }

    const movie = await prisma.movie.create({
        data: {
            title,
            release_date: new Date(release_date),
            genre_id,
            language_id,
            oscar_count,
        },
        include: {
            genres: true,
            languages: true,
        },
    });

    res.status(201).json({ movie });
};

const updateMovie = async (req: Request, res: Response) => {
    const {
        body: { title, release_date, genre_id, language_id, oscar_count },
        params: { id },
    } = req;

    if (
        title === '' ||
        release_date === '' ||
        genre_id === '' ||
        language_id === '' ||
        oscar_count === ''
    ) {
        throw new BadRequestError('No field can be empty');
    }

    const data = { title, release_date, genre_id, language_id, oscar_count };
    data.release_date
        ? (data.release_date = new Date(release_date))
        : (data.release_date = undefined);

    const movie = await prisma.movie.update({
        where: { id: parseInt(id) },
        data,
        include: {
            genres: true,
            languages: true,
        },
    });

    if (!movie) {
        throw new NotFoundError(`No job with id ${id}`);
    }

    res.status(200).json({ movie });
};

const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;

    const movie = await prisma.movie.delete({
        where: {
            id: parseInt(id),
        },
        include: {
            genres: true,
            languages: true,
        },
    });

    if (!movie) {
        throw new NotFoundError(`No job with id ${id}`);
    }

    res.status(200).json({ movie });
};

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
};
