import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcHome } from 'react-icons/fc';
import { FaSearchDollar } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { GiHouseKeys } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';

import LoginButton from "./LoginButton";

const Navbar = () => (
  <Flex alignItems='center' p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='4xl' color='blue.400' fontWeight='700'>
      <Link href='/' paddingLeft='2'>Proper.ty</Link>
    </Box>
    <Box paddingTop='1'>
      <Menu>
        <MenuButton as={IconButton} icon={<HiMenu />} variant='outlined' colorScheme='black'/>
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Seach</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FaSearchDollar />}>Buy a property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<GiHouseKeys />}>Rent a property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
    <Spacer />
    <LoginButton />
  </Flex>
);

export default Navbar;
<Link href='/' paddingLeft='2'></Link>