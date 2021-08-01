import React from "react";
import { Row, Col, Select, Checkbox } from "antd";

const { Option } = Select;

// 1.
// 이 컴포넌트는 장르에만 use case가 제한되어서 범용적으로 재사용 가능한 비쥬얼 컴포넌트를 모아놓은 /components 의 취지에 맞지 않아 보여요.
// 예를 들어 생김새가 같은 필터나 체크박스더라도 장르가 아니면 쓸 수 없으니 비효율적이에요.
// genres를 따로 constants.js에서 관리해주기만 하면 form에서 바로 Select나 Checkbox를 사용해도 될거 같아요!
// constants.js 예시: https://medium.com/@austinpaley32/how-to-add-a-constants-file-to-your-react-project-6ce31c015774

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
