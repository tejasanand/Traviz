import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps';
import { scaleQuantize, scaleLinear } from 'd3-scale';
import { csv } from 'd3-fetch';

let offenses = [
	'aggravated-assault',
	'burglary',
	'larceny',
	'motor-vehicle-theft',
	'homicide',
	'rape',
	'robbery',
	'arson',
	'violent-crime',
	'property-crime',
];
let states = [
	'AK',
	'AL',
	'AR',
	'AS',
	'AZ',
	'CA',
	'CO',
	'CT',
	'DC',
	'DE',
	'FL',
	'GA',
	'GU',
	'HI',
	'IA',
	'ID',
	'IL',
	'IN',
	'KS',
	'KY',
	'LA',
	'MA',
	'MD',
	'ME',
	'MI',
	'MN',
	'MO',
	'MS',
	'MT',
	'NC',
	'ND',
	'NE',
	'NH',
	'NJ',
	'NM',
	'NV',
	'NY',
	'OH',
	'OK',
	'OR',
	'PA',
	'PR',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VA',
	'VI',
	'VT',
	'WA',
	'WI',
	'WV',
	'WY',
];

let getDaysArray = (start, end) => {
	for (
		var arr = [], dt = new Date(start);
		dt <= end;
		dt.setDate(dt.getDate() + 1)
	) {
		arr.push(new Date(dt).toISOString().slice(0, 10));
	}
	return arr;
};
const dates = getDaysArray(new Date('2021-01-12'), new Date('2021-07-30'));
console.log('dates', dates);

// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const colorScale = scaleLinear().domain([0, 100]).range(['orange', 'green']);

const MapChart = () => {
	const [type, setType] = useState('Vaccination Rate');
	const [data, setData] = useState([]);
	const [slider, setSlider] = useState(0);

	useEffect(() => {
		// https://www.bls.gov/lau/
		// csv('/unemployment-by-county-2017.csv').then((counties) => {
		// 	setData(counties);
		// });
		csv('/us_state_vaccinations.csv').then((states) => {
			setData(states);
		});
	}, []);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className="mapContainer">
			<div style={{ width: '50%', height: '50%' }}>
				<Slider
					defaultValue={0}
					onChange={(_, value) => {
						setSlider(value);
					}}
					min={0}
					max={dates.length - 1}
				/>
				<h1>{dates[slider]}</h1>
				<ComposableMap projection="geoAlbersUsa">
					<ZoomableGroup zoom={1}>
						<Geographies geography={geoUrl}>
							{({ geographies }) =>
								geographies.map((geo) => {
									// console.log(geo);
									const cur = data.find(
										(row) =>
											row.location ===
												geo.properties.name &&
											row.date === dates[slider]
									);
									return (
										<Tooltip
											title={`${geo.properties.name} ${type} ${cur?.people_fully_vaccinated_per_hundred}`}
										>
											<Geography
												key={geo.rsmKey}
												geography={geo}
												fill={
													cur?.people_fully_vaccinated_per_hundred
														? colorScale(
																cur.people_fully_vaccinated_per_hundred
														  )
														: '#808080'
												}
											/>
										</Tooltip>
									);
								})
							}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
			</div>
		</div>
	);
};

export default MapChart;
