import React from 'react';
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';

const ResultsList = ({ results }) => {
	if (!results) return <div>Nothing found</div>;
	const renderedList = results
		.filter((result) => result.location.address && result.location.city && result.verified === true)
		.map((result) => {
			return (
				<div key={result.id}>
					<Accordion defaultActiveKey={result.id}>
						<Card>
							<Accordion.Toggle as={Button} eventKey={result.id}>
								{result.name}
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={result.id}>
								<Card.Body>
									<p>
										{result.location.address} {result.location.city}
									</p>
									<ListGroup>
										{result.categories.map((category) => (
											<ListGroup.Item key={category.id}> 
                      {category.name} </ListGroup.Item>
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
