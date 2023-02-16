import { ThemeProvider } from "./ThemeProvider";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import s from './App.module.css'
import FooterOne from "./components/Navbar/Footer";
import Navigation from './components/Navbar/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import NewsPage from "./components/News/NewsPage";
import MusicPage from './components/Music/MusicPage';
import SettingsPage from './components/Settings/SettingsPage';
import TestPage from './components/Settings/TestPage';
import Sidebar from "./components/Navbar/Sidebar";
import VideoPage from "./components/Video/VideoPage";
import AccountMenu from "./components/Profile/AccountMenu";
import MainProfile from "./components/Profile/MainProfile";

type Props = {
   dispatch: any,
   store: any
}

const App: React.FC<Props> = ({ ...props }) => {
   return (
      <ThemeProvider>
         <BrowserRouter>
            <div className={s.layout}>
               <div className={s.col2}>
                  <AccountMenu />
               </div>
            </div>
            <div className={s.layout}>
               <div className={s.col1}><Navigation /></div>
               <div className={s.col3}><Sidebar /></div>
               <div className={s.col2}>
                  <Routes>
                     <Route path="profile" element={<MainProfile
                        store={props.store}
                     />} />
                     <Route path="messages"
                        element={<Dialogs store={props.store} />} />
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