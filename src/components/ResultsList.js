import React from 'react';
// import ResultsItem from './ResultsItem';

const ResultsList = ({ results, onVideoSelect }) => {

  const renderedList = results
    // some video data are a "channel", so it can't be rendered as video
    // .filter(video => video.id && video.id.videoId)
    .map(result => {
      return (
        <div key={result.id}>
          {result.name}<br/>
          {result.location.address}<br/><hr/>
          {result.categories.map((category) => <div key={category.id}> {category.name} </div>)}
        </div>
        // <ResultsItem
        //   key={video.id.videoId}
        //   video={video}
        //   onVideoSelect={onVideoSelect}
        // />
      );
    });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default ResultsList;