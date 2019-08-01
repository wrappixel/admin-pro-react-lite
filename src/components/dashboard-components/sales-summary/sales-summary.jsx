import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Col,
	Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';

//Line chart
let lineData = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
	datasets: [{
		label: 'Income',
		borderWidth: 1,
		backgroundColor: 'rgba(94,114,228,.1)',
		borderColor: 'rgb(94,114,228)',
		pointBorderColor: 'rgb(94,114,228)',
		pointBackgroundColor: 'rgb(94,114,228)',
		data: [0, 15, 6, 11, 25, 9, 18, 24]
	}]
};

class SalesSummary extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					<div className="d-flex align-items-center">
						<div>
							<CardTitle>Sales Summary</CardTitle>
							<CardSubtitle>summary of the month</CardSubtitle>
						</div>

						<div className="ml-auto d-flex align-items-center">
							<ul className="list-inline font-12 dl mr-3 mb-0">
								<li className="border-0 p-0 text-info list-inline-item">
									<i className="fa fa-circle"></i> Iphone income
								</li>
								
							</ul>
						</div>
					</div>
				</CardBody>	
					<div className="bg-info stats-bar">
							<Row>
								<Col lg="4">
									<div className="p-3 active w-100 text-truncate">
									<h6 className="text-white">Total Sales</h6>
									<h3 className="text-white m-b-0">$10,345</h3>
								</div>

								</Col>
								<Col lg="4">
									<div className="p-3 w-100 text-truncate">
									<h6 className="text-white">This Month</h6>
									<h3 className="text-white m-b-0">$7,589</h3>
									</div>
								</Col>

								<Col lg="4">
								<div className="p-3 w-100 text-truncate">
								<h6 className="text-white">This Week</h6>
								<h3 className="text-white m-b-0">$1,476</h3>
								</div></Col>
							</Row>
						</div>
				<CardBody>		
					<Row>
						<Col lg="12">
							<div className="campaign ct-charts">
								<div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
									<Line data={lineData} options={{ maintainAspectRatio: false,  legend: { display: false, labels: { fontFamily: "Montserrat" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: true },lineSmooth: false, ticks: { fontFamily: "Montserrat" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Montserrat" } }] } }} />
								</div>
							</div>
						</Col>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default SalesSummary;
