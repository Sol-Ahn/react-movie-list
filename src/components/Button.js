import styled from "styled-components";
import { Button } from "antd";

const ButtonUI = styled(Button)`
	background-color: #4527a0;
	border: none;
`;

const StyledButton = (props) => {
	return (
		<ButtonUI className="button" type="primary" htmlType="submit">
			{props.children}
		</ButtonUI>
	);
};

export default StyledButton;
