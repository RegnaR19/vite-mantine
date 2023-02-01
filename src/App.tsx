import { Container } from '@mantine/core';
import { Text, Stack } from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";
import FooterOne from "./components/Navbar/Footer";
import Header from "./components/Navbar/Header";
import MainPage from './MainPage';

export default function App() {
   return (
      <ThemeProvider>
         <Container>
            <Stack mt={30}>
               <Text size="xl" weight={300}>
                  <Header />
                  <MainPage />
                  <FooterOne />
               </Text>
            </Stack>
         </Container>
      </ThemeProvider>
   );
}