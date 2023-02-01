import MainProfile from './components/Profile/MainProfile';
import Navigation from './components/Navbar/Navigation';
// import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MusicPage from './components/Music/MusicPage';
import SettingsPage from './components/Settings/SettingsPage';
import TestPage from './components/Settings/TestPage';
import { Grid } from '@mantine/core';

export default function MainPage() {
   return (
      <BrowserRouter>
         <Grid>
            <Grid.Col span={6}>
               <Navigation />
            </Grid.Col>
            <Grid.Col span={6}>
               <Routes>
                  <Route path="/profile" element={<MainProfile />} />
                  {/* <Route path="/messages" element={<Dialogs />} /> */}
                  <Route path="/music" element={<MusicPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/test" element={<TestPage />} />
               </Routes>
            </Grid.Col>
         </Grid>
      </BrowserRouter>
   );
}