import React from 'react';
// import ResultsItem from './ResultsItem';

const ResultsList = ({ results, onVideoSelect }) => {

  const renderedList = results
    .map(result => {
      return (
        <div key={result.id}>
          {result.name}<br/>
          {result.location.address}<br/><hr/>
          {result.categories.map((category) => <div key={category.id}> {category.name} </div>)}
        </div>
      );
    });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default ResultsList;