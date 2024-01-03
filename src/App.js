/** @format */

import "./css/arstyle.css";
import "./css/enstyle.css";
import "./responsive/arstyle.css";
import "./responsive/enstyle.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "./languages/LanguageContext";
import Home from "./page/Home";
import HomeAr from "./arpage/Home";
import About from "./page/About";
import AboutAr from "./arpage/About";
import Cafe from "./page/Cafe";
import CafeAr from "./arpage/Cafe";
import Definition from "./page/Definition";
import DefinitionAr from "./arpage/Definition";
import Contact from "./page/Contact";
import ContactAr from "./arpage/Contact";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Forgot from "./page/Forgot";
import Blog from "./components/Blog";
import Headerar from "./components/Headerar";
import Footerar from "./components/Footerar";
import Chart from "./components/Chart";
import PremierLeague from "./Leagues-page/PremierLeague";
import Laliga from "./Leagues-page/Laliga";
import SerieA from "./Leagues-page/SerieA";
import Bundesliga from "./Leagues-page/Bundesliga";
import Ligue1 from "./Leagues-page/Ligue1";
import NetherlandEredivisie from "./Leagues-page/NetherlandEredivisie";
import LigaPortugal from "./Leagues-page/LigaPortugal";
import SaudiPro from "./Leagues-page/SaudiPro";
import EgyptPL from "./Leagues-page/EgyptPL";
import BotolaPro from "./Leagues-page/BotolaPro";
import BrazilSerieA from "./Leagues-page/BrazilSerieA";
import Season from "./page-dashboard/Season";
import Menubar from "./dashboard/Menubar";
// import Dashboard from "./dashboard/Menubar";
import Addseason from "./page-dashboard/Addseason";
import LeaguesBluk from "./page-dashboard/LeaguesBluk";
import Editseason from "./page-dashboard/Editseason";
import Leagues from "./page-dashboard/Leagues";
import Addleagues from "./page-dashboard/Addleagues";
import Editleagues from "./page-dashboard/Editleagues";
import Edithome from "./Dashboard-edit-page/Edithome";
import Editabout from "./Dashboard-edit-page/Editabout";
import Privacypolicy from "./page/Privacypolicy";
import Editprivacypolicy from "./Dashboard-edit-page/Editprivacypolicy";
import Editdefinition from "./Dashboard-edit-page/Editdefinition";
import Editcontact from "./Dashboard-edit-page/Editcontact";
import Addcafe from "./page-dashboard/Addcafe";

import Cafeview from "./page-dashboard/Cafeview";
import Dataapi from "./Dashboard-edit-page/Dataapi";
import Premierchart from "./Leagues-components/Premierchart";
import Teamdetailsl from "./Chart-filter-page/Teamdetailsl";
import Teamcomparision from "./Chart-filter-page/Teamcomparision";
import ImportBulk from "./page-dashboard/LeaguesBluk";
import TeamImportBulk from "./page-dashboard/TeamBluk";
import Catlogs from "./page-dashboard/catLogs";
import Teams from "./page-dashboard/Teams";
import Dashboard from "./page-dashboard/Dashboard";
import Addteams from "./page-dashboard/Addteams"
import EditTeams from "./page-dashboard/EditTeams"
import { Media } from "reactstrap";
import UploadMedia from "./page-dashboard/UploadMedia";
import User from "./page-dashboard/User";
import Adduser from "./page-dashboard/Adduser";
import EditUser from "./page-dashboard/EditUser";
import { LeagueProvider } from "./Leagues-components/LeagueContext";
import ProtectedRoute from "./page/ProtectedRoute";
import Users from "./page-dashboard/Users";
import UserGroup from "./page-dashboard/UserGroup";
import PremierLeagueAr from "./Leagues-page/PremierLeagueAr";
function App() {
	// const navigate = useNavigate();
	const location = useLocation();
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const handleSuccessfulLogin = () => {
	// 	setIsLoggedIn(true);
	// 	navigate("/Dashboard");
	// };
	// Array of routes where the Header should not be displayed
	const noHeaderRoutes = [
		"/login",
		"/Dashboard",
		"/Signup",
		"/Forgot",
		"/Editseason",
		"/Season",
		"/Edithome",
		"/Editabout",
		"/Editprivacypolicy",
		"/Leagues",
		"/Editcontact",
		"/Editdefinition",
		"/Addcafe",
		"/Cafeview",
		"/LeaguesBluk",
		"/cat-logs",
		"/Bulk-teams",
		"/Bulk-Leagues",
		"/Teams",
		"/EditTeams",
		"/Addteams",
		"/DashboardPage",
		"/EditLeagues",
		"/Addleagues",
		"/Addseason",
		"/Dashboard",
		"/uploadMedia",
		"/User",
		"/addUser",
		"/edituser",
		"/UploadMedia",
		"/user-group"
	];

	const currentRoute = location.pathname;

	const shouldDisplayHeader = !noHeaderRoutes.some((route) => currentRoute.startsWith(route));



	const { language } = useLanguage();
	let HeaderComponent;
	let FooterComponent;
	let HomeComponent,
		AboutComponent,
		CafeComponent,
		DefinitionComponent,
		ContactComponent;
	switch (language) {
		case "en":
			HeaderComponent = Header;
			FooterComponent = Footer;
			HomeComponent = Home;
			AboutComponent = About;
			CafeComponent = Cafe;
			DefinitionComponent = Definition;
			ContactComponent = Contact;
			break;
		case "ar":
			HeaderComponent = Headerar;
			FooterComponent = Footerar;
			HomeComponent = HomeAr;
			AboutComponent = AboutAr;
			CafeComponent = CafeAr;
			DefinitionComponent = DefinitionAr;
			ContactComponent = ContactAr;
			break;
		// Add more cases for other languages if needed
		default:
			HeaderComponent = Headerar;
			FooterComponent = Footerar;
			HomeComponent = HomeAr;
			AboutComponent = AboutAr;
			CafeComponent = CafeAr;
			DefinitionComponent = DefinitionAr;
			ContactComponent = ContactAr;
			break;
	}

	return (
		<div className="App">
			{shouldDisplayHeader && HeaderComponent && <HeaderComponent />}
<LeagueProvider>
			<Routes>
				{/* <Route path="/Login" element={<Login />} /> */}
				<Route path="/" element={HomeComponent && <HomeComponent />}></Route>
				<Route
					path="/About"
					element={AboutComponent && <AboutComponent />}></Route>
				<Route path="/Leagues" element={<ProtectedRoute><Leagues /></ProtectedRoute>}></Route>
				<Route
					path="/Cafe"
					element={CafeComponent && <CafeComponent />}></Route>
				<Route
					path="/Definition"
					element={DefinitionComponent && <DefinitionComponent />}></Route>
				<Route
					path="/Contact"
					element={ContactComponent && <ContactComponent />}></Route>
				<Route path="/Signup" element={<Signup />}></Route>
				<Route path="/Forgot" element={<Forgot />}></Route>
				<Route path="/blog" element={<Blog />}></Route>
				{/* <Route path="/Chart" element={<Chart />}></Route> */}

				<Route path="/headers" element={<Header />}></Route>
				<Route path="/league" element={<PremierLeague />}></Route>
				<Route path="/leagueAr" element={<PremierLeagueAr />}></Route>
{/* 
				

				<Route path="/Laliga" element={<Laliga />}></Route>
				<Route path="/SerieA" element={<SerieA />}></Route>
				<Route path="/Bundesliga" element={<Bundesliga />}></Route>
				<Route path="/Ligue1" element={<Ligue1 />}></Route>
				<Route path="/NetherlandEredivisie"element={<NetherlandEredivisie />}></Route>
				<Route path="/LigaPortugal" element={<LigaPortugal />}></Route>
				<Route path="/SaudiPro" element={<SaudiPro />}></Route>
				<Route path="/EgyptPL" element={<EgyptPL />}></Route>
				<Route path="/BotolaPro" element={<BotolaPro />}></Route>
				<Route path="/BrazilSerieA" element={<BrazilSerieA />}></Route> */}
				<Route path="/Dashboard" element={<ProtectedRoute> <Dashboard /></ProtectedRoute>}></Route>
				<Route path="/Season" element={<ProtectedRoute><Season /></ProtectedRoute>}></Route>
				{/* <Route path="/Menubar" element={<Menubar />}></Route> */}
				<Route path="/Addseason" element={<ProtectedRoute><Addseason /></ProtectedRoute>}></Route>

				{/* <Route path="/Editseason" element={<Editseason />}></Route> */}
				<Route path="/Editseason/:id" element={<ProtectedRoute><Editseason /></ProtectedRoute>}></Route>
				<Route path="/Leagues" element={<Leagues />}></Route>
				<Route path="/Addleagues" element={<ProtectedRoute><Addleagues /></ProtectedRoute>}></Route>

				<Route path="/Bulk-Leagues" element={<ProtectedRoute><ImportBulk /></ProtectedRoute>}>
					{" "}
				</Route>
				<Route path="/Bulk-teams" element={<ProtectedRoute><TeamImportBulk /></ProtectedRoute>}>
					{" "}
				</Route>
				<Route path="/cat-logs" element={<ProtectedRoute><Catlogs /></ProtectedRoute>}>
					{" "}
				</Route>

				{/* <Route path="/Editleagues" element={<Editleagues />}></Route> */}
				<Route path="/Editleagues/:id" element={<ProtectedRoute><Editleagues /></ProtectedRoute>}></Route>
				<Route path="/Edithome" element={<ProtectedRoute><Edithome /></ProtectedRoute>}></Route>
				<Route path="/Editabout" element={<ProtectedRoute><Editabout /></ProtectedRoute>}></Route>
				<Route path="/Privacypolicy" element={<Privacypolicy />}></Route>
				<Route
					path="/Editprivacypolicy"
					element={<Editprivacypolicy />}></Route>
				<Route path="/Editdefinition" element={<ProtectedRoute><Editdefinition /></ProtectedRoute>}></Route>
				<Route path="/Editcontact" element={<ProtectedRoute><Editcontact /></ProtectedRoute>}></Route>
				<Route path="/Addcafe" element={<ProtectedRoute><Addcafe /></ProtectedRoute>}></Route>

				<Route path="/Cafeview" element={<ProtectedRoute><Cafeview /></ProtectedRoute>}></Route>
				{/* <Route path="/Dataapi" element={<Dataapi />}></Route> */}
				{/* <Route path="/Premierchart" element={<Premierchart />}></Route> */}
				<Route path="/Teamdetailsl" element={<Teamdetailsl />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/Teamcomparision" element={<Teamcomparision />}></Route>
				<Route path="/LeaguesBluk" element={<ProtectedRoute><LeaguesBluk /></ProtectedRoute>}></Route>
				<Route path="/Teams" element={<ProtectedRoute><Teams /></ProtectedRoute>}></Route>
				<Route path="/EditTeams/:id" element={<ProtectedRoute><EditTeams /></ProtectedRoute>}></Route>
				<Route path="/Addteams" element={<ProtectedRoute><Addteams /></ProtectedRoute>}></Route>
				{/* <Route path="/DashboardPage" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}></Route> */}
				<Route path="/uploadMedia" element={<ProtectedRoute><UploadMedia /></ProtectedRoute>}></Route>
				<Route path="/User" element={<ProtectedRoute><User /></ProtectedRoute>}></Route>
				<Route path="/addUser" element={<ProtectedRoute><Adduser /></ProtectedRoute>}></Route>
				<Route path="/edituser/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>}></Route>
				<Route path="/Users" element={<Users />}></Route>
				<Route path="/user-group" element={<ProtectedRoute><UserGroup /></ProtectedRoute>}></Route>

			</Routes>
			</LeagueProvider>
			{shouldDisplayHeader && FooterComponent && <FooterComponent />}
		</div>
	);
}

export default App;
