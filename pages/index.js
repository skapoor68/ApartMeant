import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';

import Property from '../components/Property';

import CoverImageA from '../assets/images/CoverImageA.jpeg';
import CoverImageB from '../assets/images/CoverImageB.jpeg';

const Banner = ({ imageUrl, purpose, title1, title2, LinkName, buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="5">
    <Box p="12">
      <Text color="gray.500" fontSize="md" fontWeight="medium">{purpose}</Text>
      <Text fontSize="4xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Button fontSize="xl">
        <Link href={LinkName}>{buttonText}</Link>
      </Button>
    </Box>
    <Image src={imageUrl} width='650' height='330' alt="banner" />
  </Flex>
)

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner 
        purpose="RENT A HOME"
        title1="Find Your Perfect"
        title2="Rental Home"
        buttonText="Explore properties for rent "
        LinkName="/search?purpose=for-rent"
        imageUrl={CoverImageB}
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy, and Own Your"
        title2="Dream Home"
        buttonText="Explore properties for sale"
        LinkName="/search?purpose=for-sale"
        imageUrl={CoverImageA}
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}