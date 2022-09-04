import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1400}
            h="20"
            marginX="auto"
            mt="4"
            px="6"
            align="center"

        >
            <Logo />

            <SearchBox />
            <Flex
                align="center"
                ml="auto"
            >
                <NotificationNav />
                <Profile showProfileData={false} />
            </Flex>
        </Flex >
    );
}