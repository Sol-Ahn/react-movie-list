import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import {
	Row,
	Col,
	Form,
	Input,
	InputNumber,
	Checkbox,
	Spin,
	message,
} from "antd";
import { genres } from "../../constants";
import StyledButton from "../../components/Button";

const MovieEditPage = (props) => {
	const [movie, setMovie] = useState({});
	const [loading, setLoading] = useState(true);
	const { id: movieId } = useParams();

	const [status, setStatus] = useState(false);

	const success = () => {
		message.success("수정 성공");
	};

	const error = () => {
		message.error("수정 실패");
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`https://limitless-sierra-67996.herokuapp.com/v1/movies/${movieId}`
				);
				setMovie(res.data);
				setLoading(false);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [movieId]);

	const onFinish = (values) => {
		const submitData = async () => {
			const req = await axios.patch(
				`https://limitless-sierra-67996.herokuapp.com/v1/movies/${movieId}`,
				values
			);
			console.log(req);

			if (req.status === 200) {
				success();
				setStatus(true);
			} else error();
		};
		submitData();
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	if (loading) return <Spin size="large" />;

	return (
		<Form
			name="movieForm"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			{status ? <Redirect to="/" /> : ""}
			<Form.Item
				initialValue={movie.title}
				label="영화 제목"
				name="title"
				rules={[{ required: true, message: "Please input the title!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				initialValue={movie.director}
				label="감독"
				name="director"
				rules={[{ required: true, message: "Please input the director!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="이미지"
				name="imageUrl"
				rules={[{ required: false, message: "Please input the image-url!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				initialValue={movie.year}
				label="개봉 연도"
				name="year"
				rules={[{ required: true, message: "Please input the year!" }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item
				initialValue={movie.rating}
				label="별점"
				name="rating"
				rules={[{ required: true, message: "Please input the rating!" }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item
				initialValue={movie.categores}
				label="장르"
				name="categories"
				rules={[{ required: true, message: "Please select the categories!" }]}
			>
				<Checkbox.Group>
					<Row>
						{genres.map((genre, index) => (
							<Col key={index} span={8}>
								<Checkbox value={genre.label}>{genre.value}</Checkbox>
							</Col>
						))}
					</Row>
				</Checkbox.Group>
			</Form.Item>
			<Form.Item
				initialValue={movie.summary}
				label="소개"
				name="summary"
				rules={[{ required: true, message: "Please input the summary!" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<StyledButton type="primary" htmlType="submit">
					수정하기
				</StyledButton>
			</Form.Item>
		</Form>
	);
};

export default MovieEditPage;
