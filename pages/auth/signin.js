import { getProviders, signIn } from "next-auth/react"
import { Box, Button, VStack } from '@chakra-ui/react'
import { BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs'

export default function SignIn({ providers }) {
  return (
    <Box minH='100vh' textAlign='center'>
    <VStack p='6' spacing='1'>
      <Box border='2px' borderColor='gray.200'>
      {Object.values(providers).map((provider) => (
        <Box p='3' key={provider.name} >
          <Button
            colorScheme={(provider.name === 'Google' && 'red') ||  
                         (provider.name === 'GitHub' && 'green') ||
                         (provider.name === 'LinkedIn' && 'blue')
                        }
            leftIcon={(provider.name === 'Google' && <BsGoogle />) ||  
                       (provider.name === 'GitHub' && <BsGithub />) ||
                       (provider.name === 'LinkedIn' && <BsLinkedin />)
                      }
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </Button>
        </Box>
      ))}
      </Box>
    </VStack>
    </Box>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}