import { getProviders, signIn } from "next-auth/react"
import { Flex, Box, Button } from '@chakra-ui/react'

export default function SignIn({ providers }) {
  return (
    // <>
    //   {Object.values(providers).map((provider) => (
    //     <div key={provider.name}>
    //       <button onClick={() => signIn(provider.id)}>
    //         Sign in with {provider.name}
    //       </button>
    //     </div>
    //   ))}
    // </>
    <Flex justifyContent='center'>
      {Object.values(providers).map((provider) => (
        <Box key={provider.name}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </Button>
        </Box>
      ))}
    </Flex>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}