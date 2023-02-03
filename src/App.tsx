import { ThemeProvider } from "./ThemeProvider";
import FooterOne from "./components/Navbar/Footer";
import HeaderOne from "./components/Navbar/Header";
import MainProfile from './components/Profile/MainProfile';
import Navigation from './components/Navbar/Navigation';
// import Dialogs from './components/Dialogs/Dialogs';
import NewsPage from "./components/News/NewsPage";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MusicPage from './components/Music/MusicPage';
import SettingsPage from './components/Settings/SettingsPage';
import TestPage from './components/Settings/TestPage';
import { Box, Col, Grid, Text, Container } from '@mantine/core';

export default function App() {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <table>
               <Text size="xl" weight={300}>
                  <HeaderOne />
                  <tr><td className="side">
                     <Navigation />
                  </td>
                     <Grid>
                        <Col className="center">
                        <Routes>
                           <Route path="/profile" element={<MainProfile />} />
                           {/* <Route path="/messages" element={<Dialogs />} /> */}
                           <Route path="/news" element={<NewsPage />} />
                           <Route path="/music" element={<MusicPage />} />
                           <Route path="/settings" element={<SettingsPage />} />
                           <Route path="/test" element={<TestPage />} />
                        </Routes>
                        </Col>
                     </Grid>
                     <td className="side">
                        Сайдбар
                     </td></tr>

                  <FooterOne />
               </Text>
            </table>
         </BrowserRouter>
      </ThemeProvider>
   );
}