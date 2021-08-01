import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, InputNumber, Checkbox, message } from "antd";
import axios from "axios";
import { StyledForm, StyledInput } from "../../components/Form";
import { GenreCheckbox } from "../../components/Genre";
import StyledButton from "../../components/Button";
// import StyledButton from "../../components/Button";

const MovieFormPage = (props) => {
  const [status, setStatus] = useState(false);

  const success = () => {
    message.success("등록 성공");
  };

  const error = () => {
    message.error("등록 실패");
  };

  const onFinish = (values) => {
    // onFinish 안에서 바로 작업을 수행하지 않고 submitData라는 함수를 만든 이유가 있나요?
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

  return (
    <StyledForm
      name="movieForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* status 라는 state를 관리할 필요 없이 더 단순하게 submitData()에서 history.push로 바로 처리할 수 있어요! */}
      {/* 사용법: https://reactrouter.com/web/api/Hooks/usehistory */}
      {/* <Redirect /> 의 use case 참고: https://reactrouter.com/web/api/Redirect */}
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
        <StyledButton type={props.type} htmlType={props.htmlType}>
          등록하기
        </StyledButton>
      </Form.Item>
    </StyledForm>
  );
};
export default MovieFormPage;
