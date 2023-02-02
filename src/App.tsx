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
import { useState } from 'react';
import {
   AppShell, Navbar, Header, Footer, Aside,
   Text, MediaQuery, Burger, useMantineTheme
} from '@mantine/core';

export default function App() {
   const theme = useMantineTheme();
   const [opened, setOpened] = useState(false);
   return (
      <ThemeProvider>
         <BrowserRouter>
            <Text size="xl" weight={300}>
               <AppShell
                  styles={{
                     main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[9],
                     },
                  }}
                  navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm"
                  navbar={
                     <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                        <Navigation />
                     </Navbar>
                  }
                  aside={
                     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                           <Text>Сайдбар</Text>
                        </Aside>
                     </MediaQuery>
                  }
                  footer={
                     <Footer height={60} p="md">
                        <FooterOne />
                     </Footer>
                  }
                  header={
                     <Header height={{ base: 60, md: 60 }} p="md">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                           <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                              <Burger
                                 opened={opened}
                                 onClick={() => setOpened((o) => !o)}
                                 size="sm"
                                 color={theme.colors.gray[6]}
                                 mr="xl"
                              />
                           </MediaQuery>
                           <HeaderOne />
                        </div>
                     </Header>
                  }>
                  <Routes>
                     <Route path="/profile" element={<MainProfile />} />
                     {/* <Route path="/messages" element={<Dialogs />} /> */}
                     <Route path="/news" element={<NewsPage />} />
                     <Route path="/music" element={<MusicPage />} />
                     <Route path="/settings" element={<SettingsPage />} />
                     <Route path="/test" element={<TestPage />} />
                  </Routes>
               </AppShell>
            </Text>
         </BrowserRouter>
      </ThemeProvider>
   );
}