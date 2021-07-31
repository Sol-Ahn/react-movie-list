import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, InputNumber, Checkbox, message, Button } from "antd";
import axios from "axios";
import { StyledForm, StyledInput } from "../../components/Form";
import { GenreCheckbox } from "../../components/Genre";
// import StyledButton from "../../components/Button";

const MovieFormPage = () => {
	const [status, setStatus] = useState(false);

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
				setStatus(true);
			} else error();
		};
		submitData();
	};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (loading) return <>loading</>;
  return (
    <Form
      name="movieForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        initialValue={movie.title}
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
        <Checkbox.Group>
          <GenreCheckbox />
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="소개"
        name="summary"
        rules={[{ required: true, message: "Please input the summary!" }]}
      >
        <Input />
      </Form.Item>

	return (
		<StyledForm
			name="movieForm"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			{status ? <Redirect to="/" /> : ""}
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
					<GenreCheckbox />
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
				<Button type="primary" htmlType="submit">
					등록하기
				</Button>
			</Form.Item>
		</StyledForm>
	);
};
export default MovieFormPage;
