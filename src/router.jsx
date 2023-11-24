import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "./components/layouts/NavBar";
import Main from "./pages/main/Main";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Nickname from "./pages/Nickname/Nickname";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 430px;
	width: 100%;
	min-height: 100vh;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
`;
const Layout = () => {
	return (
		<>
			<Wrapper>
					
					<Outlet />
			</Wrapper>
		</>
	);
};

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index path="/" element={<Main />} />
					<Route index path="/login" element={<Login />} />
					<Route index path="/join" element={<Join />} />
					<Route index path="/nickname" element={<Nickname />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
