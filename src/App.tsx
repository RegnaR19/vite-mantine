import { ThemeProvider } from "./ThemeProvider";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import s from './App.module.css'
import FooterOne from "./components/Navbar/Footer";
import Navigation from './components/Navbar/Navigation';
import NewsPage from "./components/News/NewsPage";
import MusicPage from './components/Music/MusicPage';
import SettingsPage from './components/Settings/SettingsPage';
import TestPage from './components/Settings/TestPage';
import Sidebar from "./components/Navbar/Sidebar";
import VideoPage from "./components/Video/VideoPage";
import AccountMenu from "./components/Profile/AccountMenu";
import MainProfile from "./components/Profile/MainProfile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import SizeColumns from "./components/Navbar/SizeColumns";

const App = () => {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <div className={s.layout}>
               <div className={s.col3_noborder}>
                  <SizeColumns />
               </div>
               <div className={s.col2}>
                  <AccountMenu />
               </div>
            </div>
            <div className={s.layout}>
               <div className={s.col1}><Navigation /></div>
               <div className={s.col3}><Sidebar /></div>
               <div className={s.col2}>
                  <Routes>
                     <Route path="profile" element={<MainProfile />} />
                     <Route path="messages" element={<DialogsContainer />} />
                     <Route path="users" element={<UsersContainer />} />
                     <Route path="news" element={<NewsPage />} />
                     <Route path="music" element={<MusicPage />} />
                     <Route path="settings" element={<SettingsPage />} />
                     <Route path="test" element={<TestPage />} />
                     <Route path="video" element={<VideoPage />} />
                  </Routes>
               </div>
            </div>
            <div className={s.layout}>
               <div className={s.col1_noborder}></div>
               <div className={s.col3_noborder}></div>
               <div className={s.col2}>
                  <div className={s.header}><FooterOne /></div>
               </div>
            </div>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App