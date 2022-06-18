import { useSession, signIn, signOut } from "next-auth/react"
import { Box, Button } from "@chakra-ui/react"

export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
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