import React, { useState } from 'react';
import { Accordion, Card, Button, ListGroup, Alert } from 'react-bootstrap';
import foursquare, { config } from '../apis/foursquare';

const ResultsList = ({ results }) => {
	if (!results)
		return (
			<div>
				<Alert color="warning">Nothing Found!</Alert>
			</div>
		);
	// Only display results that have a address, city and verifed ownership by business owner
	const renderedList = results.filter((result) => result.location.address && result.location.city).map((result) => {
		// const renderedList = results.map((result) => {
		return (
			<div key={result.id}>
				<Accordion defaultActiveKey={result.id}>
					<Card>
						<Accordion.Toggle as={Button} eventKey={result.id}>
							{result.name}
						</Accordion.Toggle>
						<Accordion.Collapse eventKey={result.id}>
							<Card.Body>
								<p>{result.location.address}</p>
								<p>
									{result.location.city}, {result.location.state} {result.location.postalCode} {result.location.country}
								</p>
								<p>{result.id}</p>
								<p>Lat: {result.location.lat}</p>
								<p>Lng: {result.location.lng}</p>
		<p>Here now? {result.hereNow.summary}</p>
								{/* <p>{`https://api.foursquare.com/v2/venues/${result.id}?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&v=20180323`}</p> */}
								<ListGroup>
									{result.categories.map((category) => (
										<ListGroup.Item key={category.id}>{category.name} </ListGroup.Item>
									))}
								</ListGroup>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		);
	});
	return <div>{renderedList}</div>;
};
export default ResultsList;
