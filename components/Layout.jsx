import Head from "next/head";
import { Box, Text } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => ( /* children prop is equal to whatever we pass into the Layout component whenever we call it */
  <>
    <Head>
      <title> { /* tab title */}
        Proper.ty
      </title>
    </Head>
    <Box maxWidth='1280px' m='auto'>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
