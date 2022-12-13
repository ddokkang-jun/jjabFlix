import React from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import MoviepageMovieCard from "../component/MoviepageMovieCard";
import { getMoviepageAction } from "../redux/actions/getMoviepageAction";
import { useState } from "react";
import RangeSlider from "../component/RangeSlider";
import Genres from "../component/Genres";
import useGenre from "../Hook/useGenre";
import ReactPaginate from "react-paginate";

const Movies = () => {
  const {
    moviePageMovies,
    yearFilter,
    seletedGenreArr,
    searchingKeyword,
    totalPages,
    currentPage,
  } = useSelector((state) => state.moviePage);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("popularity.desc");
  const genreForURLid = useGenre(seletedGenreArr);
  const sortMenus = [
    "popularity.desc",
    "popularity.asc",
    "release_date.asc",
    "release_date.desc",
    "vote_average.desc",
  ];

  console.log("current",currentPage);

  const handlePageClick = (data) => {
    window.scroll(0, 0);
    dispatch({
      type: "CURRENT_PAGE_CHANGE",
      payload: { currentPage: data.selected + 1 },
    });
    // dispatch(
    //   getMoviepageAction.getMoviepageMovies(
    //     sortBy,
    //     currentPage,
    //     yearFilter,
    //     genreForURLid,
    //     searchingKeyword
    //   )
    // );
  };

  const handleSortSelected = (event) => {
    setSortBy(event);
  };

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(
      getMoviepageAction.getMoviepageMovies(
        sortBy,
        currentPage,
        yearFilter,
        genreForURLid,
        searchingKeyword
      )
    );
    // eslint-disable-next-line
  }, [sortBy, currentPage, yearFilter, genreForURLid, searchingKeyword]);

  return (
    <Container>
      <span className='pageTitle'>Movies</span>
      <Row>
        <Col md={3}>
          <details>
            <summary>Sort</summary>
            <div className='filter'>
              <div className='filter-title'>Sort Results By</div>
              <div>
                <Dropdown className='filter-dropdown'>
                  <Dropdown.Toggle variant='outline-danger' id='dropdown-basic'>
                    Choose Sort Way
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {sortMenus.map((item, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={(event) =>
                          handleSortSelected(event.target.textContent)
                        }>
                        {item}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </details>
          <details className='filter-details'>
            <summary>Filter</summary>
            <div className='year-filter-container'>
              <div className='year-filter-title'>YEAR Filter</div>
              <div>
                <span className='year-filter-from-to'>From:</span>
                <span className='year-filter-value'>{yearFilter[0]}</span>
                <span className='year-filter-from-to'>-To:</span>
                <span className='year-filter-value'>{yearFilter[1]}</span>
              </div>
              <span className='range-container'>
                <RangeSlider yearFilter={yearFilter} />
              </span>
            </div>
            <summary className='dummy-summary'></summary>
            <summary className='genre-title'>Genres</summary>
            <div className='genre-filter-container'>
              <div>
                <Genres />
              </div>
            </div>
          </details>
        </Col>

        {/* movies Card Area */}
        <Col md={9}>
          <div className='movie-card-container'>
            {moviePageMovies &&
              moviePageMovies.map((item) => (
                <MoviepageMovieCard
                  item={item}
                  key={item.id}
                  poster={item.poster_path}
                  title={item.title}
                  date={item.release_date}
                />
              ))}
          </div>
        </Col>
      </Row>
      <div className='pagination-container'>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </Container>
  );
};

export default Movies;
