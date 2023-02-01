import MainProfile from '../Profile/MainProfile.jsx';
import Navigation from '../Navbar/Navigation';
import Dialogs from '../Dialogs/Dialogs';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NewsPage from '../News/NewsPage';
import MusicPage from '../Music/MusicPage';
import SettingsPage from '../Settings/SettingsPage';
import TestPage from '../Settings/TestPage';

const Main = (props) => {

   return (
      <BrowserRouter>
      
                  <Navigation />
                  <Routes>
                     <Route path="/profile" element={<MainProfile />} />
                     <Route path="/messages" element={<Dialogs />} />
                     <Route path="/news" element={<NewsPage />} />
                     <Route path="/music" element={<MusicPage />} />
                     <Route path="/settings" element={<SettingsPage />} />
                     <Route path="/test" element={<TestPage />} />
                  </Routes>
      </BrowserRouter>
   );
}

export default Main;