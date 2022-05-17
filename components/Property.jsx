import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BSGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.png';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap='wrap' width='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width='400' height='260' alt='house' />
      </Box>
    </Flex>
  </Link>
);

export default Property;
