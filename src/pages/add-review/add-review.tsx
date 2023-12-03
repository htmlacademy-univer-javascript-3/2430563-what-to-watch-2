import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Logo from '../../components/header/logo/logo';
import Breadcrumbs from '../../components/header/breadcrumbs/breadcrumbs';
import UserBlock from '../../components/header/user-block/user-block';
import {FilmInfo} from '../../types/films.tsx';
import NotFound from '../not-found/not-found.tsx';

type AddReviewProps = {
  filmsData: FilmInfo[];
}

type FormData = {
  name: string;
  value: string;
}

export default function AddReview({filmsData}: AddReviewProps): React.JSX.Element {

  const paramsFilm = useParams();
  const film = filmsData.find((item) => item.id === paramsFilm.id);

  const [formData, setFormData] = useState({
    'rating': '',
    'review-text': '',
  });
  const onChangeHandler = ({name, value}: FormData) => {
    setFormData({...formData, [name]: value});
  };

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film.backgroundImage}
            alt={film.title}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <Breadcrumbs id={film.id} title={film.title} />
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={`${film.title} poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-10"
                type="radio"
                name="rating"
                value={10}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-10">
                  Rating 10
              </label>
              <input
                className="rating__input"
                id="star-9"
                type="radio"
                name="rating"
                value={9}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-9">
                  Rating 9
              </label>
              <input
                className="rating__input"
                id="star-8"
                type="radio"
                name="rating"
                value={8}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-8">
                  Rating 8
              </label>
              <input
                className="rating__input"
                id="star-7"
                type="radio"
                name="rating"
                value={7}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-7">
                  Rating 7
              </label>
              <input
                className="rating__input"
                id="star-6"
                type="radio"
                name="rating"
                value={6}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-6">
                  Rating 6
              </label>
              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                defaultValue={5}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-5">
                  Rating 5
              </label>
              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value={4}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-4">
                  Rating 4
              </label>
              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value={3}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-3">
                  Rating 3
              </label>
              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value={2}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-2">
                  Rating 2
              </label>
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value={1}
                onChange={(event) => onChangeHandler(event.target)}
              />
              <label className="rating__label" htmlFor="star-1">
                  Rating 1
              </label>
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              defaultValue={''}
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                  Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  ) : <NotFound/>;
}
