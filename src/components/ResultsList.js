import React from 'react';
import { Accordion, Card, Button, ListGroup, Alert } from 'react-bootstrap';

const ResultsList = ({ results }) => {
	if (!results)
		return (
			<div>
				<Alert color="warning">Nothing Found!</Alert>
			</div>
		);
	// Only display results that have a address and city
	const renderedList = results.filter((result) => result.location.address && result.location.city).map((result) => {
		return (
			<div key={result.id}>
				<Accordion>
					<Card>
						<Accordion.Toggle as={Button} eventKey={result.id}>
							{result.name}
						</Accordion.Toggle>
						<Accordion.Collapse eventKey={result.id}>
							<Card.Body>
								<p>{result.location.address}</p>
								<p>
									{result.location.city}, {result.location.state} {result.location.postalCode}{' '}
									{result.location.country}
								</p>
								<p>Here now? {result.hereNow.summary}</p>
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
