import React, { useState, useEffect } from 'react';
import { GoogleMap, InfoWindow, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import mapStyles from './mapStyles';
const Map = ({ results }) => {
	const [ selectedVenue, setSelectedVenue ] = useState(null);

	useEffect(() => {
		const listener = (e) => {
			if (e.key === 'Escape') {
				setSelectedVenue(null);
			}
		};
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 37.339054967542275, lng: -121.97302387715864 }}
			defaultOptions={{ styles: mapStyles }}>
			{results.map((result) => {
				return (
					<Marker
						key={result.id}
						position={{
							lat: result.location.lat,
							lng: result.location.lng
						}}
						onClick={() => {
							setSelectedVenue(result);
						}}
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
					<div>
						<p>{selectedVenue.name}</p>
						<p>{selectedVenue.location.address}</p>
						<p>
							{selectedVenue.location.city}, {selectedVenue.location.state}{' '}
							{selectedVenue.location.postalCode} {selectedVenue.location.country}
						</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));
