import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchMovieAction } from "../redux/actions/getSearchMovieAction";
import ReactPaginate from "react-paginate";
import MoviepageMovieCard from "../component/MoviepageMovieCard";
import { Col, Container, Row } from "react-bootstrap";
import SearchMovieRangeSlider from '../component/SearchMovieRangeSlider';

const MovieSearch = () => {
  const { searchMovies, totalPages, currentPage, yearFilter } = useSelector(
    (state) => state.searchMovies
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    window.scroll(0, 0);
    let currentPage = data.selected + 1;
    dispatch({
      type: "CHANGE_CURRENT_PAGE",
      payload: { currentPage: currentPage },
    });
  };

  useEffect(() => {
    dispatch(getSearchMovieAction.getSearchMovie(id, currentPage, yearFilter));
  }, [id, currentPage, yearFilter]);

  return (
    <Container>
      <span className='pageTitle'>Movies</span>
      <Row>
        <Col md={3}>
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
                <SearchMovieRangeSlider yearFilter={yearFilter} />
              </span>
            </div>
          </details>
        </Col>
        {/* movies Card Area */}
        <Col md={9}>
          <div className='movie-card-container'>
            {searchMovies &&
              searchMovies.map((item) => (
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

export default MovieSearch;
