import React from 'react';
import { Accordion, Card, Button, ListGroup } from 'react-bootstrap';
// import ResultsItem from './ResultsItem';

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
					{/* 
				<div key={result.id}>
					{result.name}
					<br />
					{result.location.address}
					<br />
					<hr />
					{result.categories.map((category) => <div key={category.id}> {category.name} </div>)}
				</div> */}
				</div>
			);
		});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default ResultsList;
