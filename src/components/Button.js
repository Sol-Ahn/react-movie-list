import styled from "styled-components";
import { Button } from "antd";

const ButtonUI = styled(Button)`
	color: #ffffff;
	background-color: #4527a0;
	border: none;
`;

const StyledButton = (props) => {
	return <ButtonUI {...props}>{props.children}</ButtonUI>;
};

export default StyledButton;
