import React, { Fragment } from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';

const CharacterGrid = ({ isLoading, items }) => {
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="cards">
          {items.map((item) => (
            <CharacterItem key={item.char_id}  item={item}/>
          ))}
        </section>
      )}
    </Fragment>
  );
};

export default CharacterGrid;
