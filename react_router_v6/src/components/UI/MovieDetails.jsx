import { NavLink, useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();

const {Actor,Poster,Title,Type,Year,Plot,BoxOffice,imdbID}=movieData;

  return (
    <>
      <li className="hero-container hero-movie-container">
        <div className="main-container">
          <div className="poster-container">
            <NavLink to="#">
              <img src={Poster} className="poster" alt={Title} />
            </NavLink>
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <h4 className="ticket__movie-title">{Title}</h4>
              <p>{Plot}</p>
              <p className="ticket__current-price">Type: </p>
              <p className="ticket__current-price">Type: </p>
              <button className="ticket__buy-btn">Watch now</button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
