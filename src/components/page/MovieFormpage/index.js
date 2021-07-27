import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Row,
  Col,
  Alert,
} from "antd";
import axios from "axios";

const MovieFormPage = () => {
  const onFinish = (values) => {
    // 8. form 데이터를 "submit"한다는 네이밍이 더 일반적인거 같아요! (e.g. submitData)
    const sendData = async () => {
      const req = await axios.post(
        "https://limitless-sierra-67996.herokuapp.com/v1/movies",
        values
      );
      console.log("Successed:", req);
      // 9. alert이 의도대로 뜨지 않는거 같아요 - https://ant.design/components/message/ 를 사용해보세요
      if (req.status === 201)
        <Alert message="업로드에 성공했습니다." type="success" />;
      else <Alert message="업로드에 실패했습니다." type="error" />;
    };
    sendData();
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
        <Checkbox.Group>
          {/* 10. 장르 리스트가 리스트 페이지 필터에서도 쓰이고 있는데, 별도의 파일로 빼는게 관리하기 좋을거에요 */}
          <Row>
            <Col span={8}>
              <Checkbox value="horror">공포</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="drama">드라마</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="sf">SF</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="thriller">스릴러</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="action">액션</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="docu">다큐멘터리</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="romance">로맨스</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="anime">애니메이션</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
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
