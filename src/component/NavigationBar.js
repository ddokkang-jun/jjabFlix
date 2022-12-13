import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const { keyword } = useSelector((state) => state.searchMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getSearchMovie = () => {
    dispatch({ type: "ADD_KEYWORD", payload: { keyword: keyword } });
    navigate(`/search/${keyword}`);
  };

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${keyword}`);
    }
  };

  return (
    <Navbar bg='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            width={100}
            src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }}>
            <Link to='/' className='navbar-link'>
              Home
            </Link>
            <Link to='/movies' className='navbar-link'>
              Movies
            </Link>
          </Nav>
          <div className='search-box'>
            <input
              className='search-input'
              type='text'
              placeholder='movie...'
              onChange={(event) =>
                dispatch({
                  type: "ADD_KEYWORD",
                  payload: { keyword: event.target.value },
                })
              }
              onKeyPress={onCheckEnter}
            />
            <button className='search-btn' onClick={getSearchMovie}>
              SEARCH
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
