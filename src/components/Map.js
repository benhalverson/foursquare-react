import React, { useState } from 'react';
import { GoogleMap, InfoWindow, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = ({ results }) => {
	const [ selectedVenue, setSelectedVenue ] = useState(null);
	const markerClickHandler = () => {
		console.log(selectedVenue);
		setSelectedVenue(selectedVenue);
  };
	return (
		<GoogleMap defaultZoom={12} defaultCenter={{ lat: 37.339054967542275, lng: -121.97302387715864 }}>
			{results.map((result) => {
				return (
					<Marker
						key={result.id}
						position={{
							lat: result.location.lat,
							lng: result.location.lng
						}}
            onClick={markerClickHandler}
					/>
				);
			})}
			{selectedVenue && (
				<InfoWindow
					position={{
						lat: selectedVenue.location.lat,
						lng: selectedVenue.location.lng
					}}
					onCloseClick={() => {
						setSelectedVenue(null);
					}}>
					<p>Venue Details</p>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));
