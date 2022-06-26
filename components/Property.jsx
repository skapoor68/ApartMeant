import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, Badge, Spacer } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { BsRulers } from 'react-icons/bs';

import DefaultImage from '../assets/images/house.png';

const Property = ({ property: 
  { coverPhoto, price, rentFrequency, rooms, title,
    baths, area, agency, isVerified, externalID }
  }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap='wrap' width='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
      <Box p="5" boxShadow='lg' maxW="500px" borderWidth="1px" borderRadius='15'>
        <Image borderRadius="md" src={coverPhoto ? coverPhoto.url : DefaultImage} width='420' height='285' />
        <Flex alignItems='center' mt={2}>
          {isVerified && (
            <>
            <Box paddingRight='3' color='green.400'>
              <GoVerified padding='1' />
            </Box>
            <Badge colorScheme="green">Verified</Badge>
            </>
          )}
          <Spacer />
          <Text fontSize='lg'>{millify(price)} AED {rentFrequency && ` ${rentFrequency}`}</Text>
        </Flex>
        <Text marginBottom='1' mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short" casing='capitalize'>
          {title.length > 30 ? `${title.substring(0, 50)}...` : title}  
        </Text>
        <Flex alignItems='center' paddingTop='2' justifyContent='space-between' w='250px' color='blue.400'>
           <FaBed /> {rooms} | <FaBath /> {baths} | <BsRulers /> {millify(area)} square meters 
        </Flex>
        <Flex>
            <Box>
            </Box>
            <Spacer />
            <Avatar size='md' src={agency?.logo?.url} />
          </Flex>
      </Box>
      </Flex>
  </Link>
);

export default Property;
