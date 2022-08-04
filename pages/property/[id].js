import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { BsRulers } from 'react-icons/bs';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import GeoMap from '../../components/GeoMap';


const PropertyDetails = ({ propertyDetails: 
  { 
    price, rentFrequency, rooms, title, baths, area, 
    agency, isVerified, description, type, purpose, 
    furnishingStatus, amenities, photos, geography
  } 
}) => (
  <Box maxWidth='1000px' margin='auto' p='4'> 
    {photos && <ImageScrollbar data={photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'justifyContent='space-between'>
        <Flex alignItems='center'>
          <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}
          </Box>
          <Text fontWeight='bold' font-size='lg'>{millify(price)} AED {rentFrequency && `${rentFrequency}`}</Text>
        </Flex>
        <Box>
          <Avatar size='lg' src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex alignItems='center' justifyContent='space-between' w='250px' color='blue.400'>
        <FaBed /> {rooms} | <FaBath /> {baths} | <BsRulers /> {millify(area)} square meters 
      </Flex>
      <Box marginTop='2'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>
          {title}
        </Text>
        <Text lineHeight='2' color='gray.600'>
          {description.replaceAll('<b>', '')    // clean up descriptions 
                      .replaceAll('</b>', '')
                      .replaceAll('<i>', '')
                      .replaceAll('</i>', '')
                      .replaceAll('<p>', '')
                      .replaceAll('</p>', '')
          }
        </Text>
      </Box>
      <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.200' p='5'>
          <Text>Type</Text>
          <Text fontWeight='bold'>{type}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.200' p='5'>
          <Text>Purpose</Text>
          <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.200' p='5'>
            <Text>Furnishing status</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && <Text fontSize='2xl' fontWeight='bold' marginTop='8'>Amenities</Text>}
          <Flex flexWrap='wrap'>
            {amenities.map((item) => (
              item.amenities.map((amenity) => (
                <Text 
                  fontWeight='bold'
                  color='blue.400'
                  fontSize='large'
                  m='2'
                  p='3'
                  bg='gray.100'
                  borderRadius='35'
                  key={amenity.text}
                >
                  {amenity.text}
                </Text>
              ))
            ))}
          </Flex>
      </Box>
      <Box p='10'>
        <Flex>
          <GeoMap data={geography} />
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data
    }
  }
}
