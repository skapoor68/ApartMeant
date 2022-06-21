import { useSession, signIn, signOut } from "next-auth/react"
import { Box, Button } from "@chakra-ui/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Button p='2' marginRight='7' onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    )
  }
  return (
    <Box>
      <Button p='2' marginRight='7' onClick={() => signIn()}>
        Sign in
      </Button>
    </Box>
  )
}