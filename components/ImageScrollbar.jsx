import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon 
        as={HiArrowSmLeft}
        onClick={() => scrollPrev()}
        fontSize='4xl'
        cursor='pointer'
        color='gray.600'
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon 
        as={HiArrowSmRight}
        onClick={() => scrollNext()}
        fontSize='4xl'
        cursor='pointer'
        color='gray.600'
      />
    </Flex>
  )
}

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }}>
    {data.map((item) => (
      <Box key={item.id} w='910px' itemId={item.id} overflow='hideen' p='1'>
        <Image 
          alt='property'
          placeholder='blur' 
          blurDataURL={item.url} 
          src={item.url} 
          width={1000} 
          height={550}
          size='(max-width:500px) 100px, (max-width:1024px) 400px, 1000px'
          />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;

