import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
	Row,
	Col,
	Form,
	InputNumber,
	Checkbox,
	message,
	Upload,
	Button,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { StyledForm, StyledInput } from "../../components/Form";
import StyledButton from "../../components/Button";
import { genres } from "../../constants";

const MovieFormPage = () => {
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

	const props = {
		name: "file",
		action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
		headers: {
			authorization: "authorization-text",
		},
		onChange(info) {
			if (info.file.status !== "uploading") {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === "done") {
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
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
			<Form.Item label="이미지" name="image">
				<Upload {...props}>
					<Button icon={<UploadOutlined />}>Upload</Button>
				</Upload>
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
