import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, InputNumber, Checkbox, message } from "antd";
import axios from "axios";
import { StyledForm, StyledInput } from "../../components/Form";
import StyledButton from "../../components/Button";
import { genres } from "../../constants";

const MovieFormPage = (props) => {
	let history = useHistory();

	const success = () => {
		message.success("등록 성공");
	};

	const error = () => {
		message.error("등록 실패");
	};

	const onFinish = (values) => {
		const submitData = async () => {
			const req = await axios.post(
				"https://limitless-sierra-67996.herokuapp.com/v1/movies",
				values
			);
			if (req.status === 201) {
				success();
				history.push("/");
			} else error();
		};
		submitData();
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<StyledForm
			name="movieForm"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="영화 제목"
				name="title"
				rules={[{ required: true, message: "Please input the title!" }]}
			>
				<StyledInput />
			</Form.Item>
			<Form.Item
				label="감독"
				name="director"
				rules={[{ required: true, message: "Please input the director!" }]}
			>
				<StyledInput />
			</Form.Item>
			<Form.Item
				label="이미지"
				name="imageUrl"
				rules={[{ required: false, message: "Please input the image-url!" }]}
			>
				<StyledInput />
			</Form.Item>
			<Form.Item
				label="개봉 연도"
				name="year"
				rules={[{ required: true, message: "Please input the year!" }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item
				label="별점"
				name="rating"
				rules={[{ required: true, message: "Please input the rating!" }]}
			>
				<InputNumber />
			</Form.Item>
			<Form.Item
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
				label="소개"
				name="summary"
				rules={[{ required: true, message: "Please input the summary!" }]}
			>
				<StyledInput />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<StyledButton type="primary" htmlType="submit">
					등록하기
				</StyledButton>
			</Form.Item>
		</StyledForm>
	);
};
export default MovieFormPage;
