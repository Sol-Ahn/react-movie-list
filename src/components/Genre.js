import React from "react";
import { Row, Col, Select, Checkbox } from "antd";

const { Option } = Select;

const genres = [
	{ value: "공포" },
	{ value: "드라마" },
	{ value: "SF" },
	{ value: "스릴러" },
	{ value: "액션" },
	{ value: "다큐멘터리" },
	{ value: "로맨스" },
	{ value: "애니메이션" },
];

const GenreFilter = () => {
	return (
		<Select placeholder="장르">
			{genres.map((genre, index) => (
				<Option key={index} value={genre.key}>
					{genre.value}
				</Option>
			))}
		</Select>
	);
};

const GenreCheckbox = () => {
	return (
		<Row>
			{genres.map((genre, index) => (
				<Col key={index} span={8}>
					<Checkbox value={genre.value}>{genre.value}</Checkbox>
				</Col>
			))}
		</Row>
	);
};

export { GenreFilter, GenreCheckbox };
