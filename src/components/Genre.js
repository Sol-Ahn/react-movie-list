import React from "react";
import { Row, Col, Select, Checkbox } from "antd";

const { Option } = Select;

const genres = [
	{ key: "horror", value: "공포" },
	{ key: "drama", value: "드라마" },
	{ key: "sf", value: "SF" },
	{ key: "thriller", value: "스릴러" },
	{ key: "action", value: "액션" },
	{ key: "documentary", value: "다큐멘터리" },
	{ key: "romance", value: "로맨스" },
	{ key: "animation", value: "애니메이션" },
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
		<Checkbox.Group>
			<Row>
				{genres.map((genre, index) => (
					<Col key={index} span={8}>
						<Checkbox value={genre.key}>{genre.value}</Checkbox>
					</Col>
				))}
			</Row>
		</Checkbox.Group>
	);
};

export { GenreFilter, GenreCheckbox };
