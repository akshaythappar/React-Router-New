import { NavLink } from "react-router-dom";

export const Header = () => {
   const getNavLinkStyle = ({isActive})=>{
      return {
        color:isActive?"red":"black",
   }
}
  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Hi akshay this side</p>
            </div>
            <div className="sign_in_up">
              <NavLink to="">SIGN IN</NavLink>
              <NavLink to="">SIGN UP </NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>ThapaFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(isActive) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={({isActive}) => {
                    return {
                      color: isActive ? "blue" : "black",
                    };
                  }}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link">
                  movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link"   style={getNavLinkStyle}>
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
