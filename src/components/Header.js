import styled from "styled-components";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../App.css";

const { Header } = Layout;

const HeaderUI = styled(Header)`
	background-color: #5e35b1;
`;

const styledHeader = () => {
	return (
		<HeaderUI>
			<Link to="/">
				<span className="logo">My Movies</span>
			</Link>
		</HeaderUI>
	);
};

export default styledHeader;
