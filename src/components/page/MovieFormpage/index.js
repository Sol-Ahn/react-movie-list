import React from "react";
import { Form, Input, InputNumber, Button, Alert } from "antd";
import axios from "axios";
import { GenreCheckbox } from "../../UI/Genre";

const MovieFormPage = () => {
	const onFinish = (values) => {
		const submitData = async () => {
			const req = await axios.post(
				"https://limitless-sierra-67996.herokuapp.com/v1/movies",
				values
			);
			console.log("Successed:", req);
			if (req.status === 201)
				<Alert message="업로드에 성공했습니다." type="success" />;
			else <Alert message="업로드에 실패했습니다." type="error" />;
		};
		submitData();
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
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
				<Input />
			</Form.Item>
			<Form.Item
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
				<GenreCheckbox />
			</Form.Item>
			<Form.Item
				label="소개"
				name="summary"
				rules={[{ required: true, message: "Please input the summary!" }]}
			>
				<Input />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type="primary" htmlType="submit">
					수정하기
				</Button>
			</Form.Item>
		</Form>
	);
};

export default MovieFormPage;
