import React, { useState, useEffect } from 'react';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps';
import { scaleQuantize, scaleLinear } from 'd3-scale';
import { csv } from 'd3-fetch';
import { createSvgIcon } from '@material-ui/core';

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
// const dates = getDaysArray(new Date('2021-01-12'), new Date('2021-07-30'));

// const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json';
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const MapChart = () => {
	const [type, setType] = useState('Vaccination Rates');
	const [data, setData] = useState([]);
	const [range, setRange] = useState([0, 100]);
	const [dates, setDates] = useState(
		getDaysArray(new Date('2021-01-12'), new Date('2021-07-30'))
	);
	const [valueField, setValueField] = useState(
		'people_fully_vaccinated_per_hundred'
	);
	const [slider, setSlider] = useState(0);
	// let dates = getDaysArray(new Date('2021-01-12'), new Date('2021-07-30'));
	let colorScale = scaleLinear().domain(range).range(['orange', 'green']);

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
		setSlider(0);
		// Change dates
		switch (type) {
			case 'Vaccination Rates':
				csv('/us_state_vaccinations.csv').then((states) => {
					setData(states);
				});
				setValueField('people_fully_vaccinated_per_hundred');
				setDates(
					getDaysArray(new Date('2021-01-12'), new Date('2021-07-30'))
				);
				break;
			case 'Unemployment Rates':
				// csv('/us_state_vaccinations.csv').then((states) => {
				// 	setData(states);
				// });
				setValueField('unemployment_rate');
				// setDates(getDaysArray)
				console.log('unemployment');
				break;
			case 'Covid Data':
				csv('/us-states.csv').then((states) => {
					setData(states);
				});
				setRange([0, 100000]);
				setDates(
					getDaysArray(new Date('2020-01-21'), new Date('2021-07-30'))
				);
				setValueField('cases');
				break;
			case 'Crime Data':
				csv('/pivoted_crime.csv').then((states) => {
					setData(states);
				});
				let list = [];
				for (var i = 1991; i <= 2019; i++) {
					list.push(i.toString());
				}
				setDates(list);
				setValueField(offenses[0]);
				console.log('Crime data');
				break;
			default:
				console.log('Error');
				break;
		}
	}, [type]);

	useEffect(() => {
		switch (valueField) {
			case 'people_fully_vaccinated_per_hundred':
				setRange([0, 60]);
				break;
			case 'aggravated-assault':
				setRange([0, 10000]);
				break;
			case 'burglary':
				setRange([0, 10000]);
				break;
			case 'larceny':
				setRange([0, 50000]);
				break;
			case 'motor-vehicle-theft':
				setRange([0, 10000]);
				break;
			case 'homicide':
				setRange([0, 200]);
				break;
			case 'rape':
				setRange([0, 1000]);
				break;
			case 'robbery':
				setRange([0, 4000]);
				break;
			case 'arson':
				setRange([0, 500]);
				break;
			case 'violent-crime':
				setRange([0, 10000]);
				break;
		}
	}, [valueField]);

	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	const handleChange = (_, value) => {
		setType(value);
	};

	const handleChangeField = (_, value) => {
		setValueField(value);
	};

	return (
		<div style={{ display: 'flex' }}>
			<div className="mapContainer">
				<p>{type} across States over time</p>
				<FormControl component="fieldset">
					<FormLabel component="legend">Metric</FormLabel>
					<RadioGroup row value={type} onChange={handleChange}>
						<FormControlLabel
							value="Vaccination Rates"
							control={<Radio />}
							label="Vaccination Rates"
							defaultValue
						/>
						<FormControlLabel
							value="Unemployment Rates"
							control={<Radio />}
							label="Unemployment Rates"
						/>
						<FormControlLabel
							value="Covid Data"
							control={<Radio />}
							label="Covid Data"
						/>
						<FormControlLabel
							value="Crime Data"
							control={<Radio />}
							label="Crime Data"
						/>
					</RadioGroup>
				</FormControl>
				<div style={{ width: '100%' }}>
					<Slider
						defaultValue={0}
						onChange={(_, value) => {
							setSlider(value);
						}}
						min={0}
						max={dates.length - 1}
					/>
					<h1>{dates[slider]}</h1>
					<ComposableMap projection="geoAlbersUsa" width={800}>
						<ZoomableGroup zoom={1}>
							<Geographies geography={geoUrl}>
								{({ geographies }) =>
									geographies.map((geo) => {
										const cur = data.find(
											(row) =>
												row.state ===
													geo.properties.name &&
												row.date === dates[slider]
										);
										return (
											<Tooltip
												title={
													cur
														? `${geo.properties.name} ${valueField} ${cur[valueField]}`
														: ''
												}
											>
												<Geography
													key={geo.rsmKey}
													geography={geo}
													fill={
														cur
															? cur[valueField]
																? colorScale(
																		cur[
																			valueField
																		]
																  )
																: '#808080'
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
			<div style={{ marginLeft: '5%', marginTop: '5%' }}>
				{type === 'Crime Data' && (
					<FormControl component="fieldset">
						<FormLabel component="legend">Options</FormLabel>
						<RadioGroup
							value={valueField}
							onChange={handleChangeField}
						>
							{offenses.map((offense) => {
								return (
									<FormControlLabel
										value={`${offense}`}
										control={<Radio />}
										label={`${offense
											.split('-')
											.join(' ')}`}
									/>
								);
							})}
						</RadioGroup>
					</FormControl>
				)}
				{type === 'Covid Data' && (
					<FormControl component="fieldset">
						<FormLabel component="legend">Options</FormLabel>
						<RadioGroup
							value={valueField}
							onChange={handleChangeField}
						>
							<FormControlLabel
								value="cases"
								control={<Radio />}
								label="New Cases"
							/>
							<FormControlLabel
								value="deaths"
								control={<Radio />}
								label="Deaths"
							/>
						</RadioGroup>
					</FormControl>
				)}
			</div>
		</div>
	);
};

export default MapChart;
