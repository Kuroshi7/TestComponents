import { Button, Flex, HStack } from "@chakra-ui/react"
import { InstagramIcon } from "../icons/instagram-icon/InstagramIcon"
import { LinkedinIcon } from "../icons/linkedin-icon/LinkedinIcon"
import { FacebookIcon } from "../icons/facebook-icon/FacebookIcon"
import { TikTokIcon } from "../icons/tiktok-icon/TikTokIcon"


export const SocialNav = () => {
    return (
        <Flex justify={'center'} >
            <HStack wrap={'wrap'} justify={'end'} >
                <Button
                    w={30}
                    h={30}
                    bg={'transparent'}
                >
                    <InstagramIcon />
                </Button>
                <Button
                    w={30}
                    h={30}
                    bg={'transparent'}>
                    <LinkedinIcon />
                </Button>
                <Button
                    w={30}
                    h={30}
                    bg={'transparent'}
                >
                    <FacebookIcon />
                </Button>
                <Button
                    w={30}
                    h={30}
                    bg={'transparent'}
                >
                    <TikTokIcon />
                </Button>
            </HStack>
        </Flex>
    )
}