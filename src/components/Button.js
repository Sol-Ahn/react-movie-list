import styled from "styled-components";
import { Button } from "antd";
import "./Button.css";

const ButtonUI = styled(Button)`
	background-color: #4527a0;
	border: none;
`;

const StyledButton = (props) => {
	return (
		<ButtonUI className="button" type="primary">
			{props.children}
		</ButtonUI>
	);
};

export default StyledButton;
