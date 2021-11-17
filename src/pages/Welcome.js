import Box from '@mui/material/Box'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

const Welcome = () => {
    const identity = useIdentityContext()
    return (
        <>
            {!identity.provisionalUser && !identity.user &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Welcome to my site! Please sign up or login to check out some cool Marvel stuff!</h2>
                </Box>
            }

            {identity.provisionalUser &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Thank you for signing up, please check your email to confirm your account.</h2>
                </Box>
            }

            {identity.user &&
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Welcome to my Marvel site, {identity.user.user_metadata?.firstName}!</h2>
                </Box>
            }
        </>
    )
}

export default Welcome