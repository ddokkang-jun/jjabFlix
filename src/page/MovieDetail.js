import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetailBanner from "../component/MovieDetailBanner";
import { getMovieDetailAction } from "../redux/actions/getMovieDetailAction";
import FadeLoader from "react-spinners/FadeLoader";
import Review from '../component/Review';
import CreditSlider from '../component/CreditSlider';

const MovieDetail = () => {
  const { loading } = useSelector((state) => state.movieDetail);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetailAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return <FadeLoader color='#36d7b7' loading={loading} size={150} />;
  }
  return (
    <div>
      <MovieDetailBanner />
      <CreditSlider />
      <Review />
    </div>
  );
};

export default MovieDetail;
