import React from "react";

const CreditCard = ({ item }) => {
  // console.log("item", item);
  return (
    <div className='credit-card-container'>
      <div>
        {item.profile_path == null ? (
          <img className='credit-img' width={138} height={175} src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg' alt='' />
        ) : (
          <img className='credit-img' src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`} alt='' />
        )}
      </div>
      <div className='credit-info'>
        <div className='credit-name'>{item.name}</div>
        <div>{item.character}</div>
      </div>
    </div>
  );
};

export default CreditCard;
