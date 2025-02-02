import { NavLink, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="404" />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you are looking for could not be found
            </p>
            <p className="p-b">...Back to the pervious page </p>
          </div>
        </div>
        <NavLink to="/" className="btn">
            Back to the homepage
        </NavLink>
      </section>
    );
  }
  return <h1>The page you are looking does not exist</h1>
};
