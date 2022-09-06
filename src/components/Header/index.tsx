import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"
import { Logo } from "../Header/Logo"
import { NotificationNav } from "./NotificationsNav"
import { Profile } from "../Header/Profile"
import { SearchBox } from "../Header/SearchBox"
export function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            w="100%"
            as="header"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    aria-label="Open sidebar"
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    icon={<Icon as={RiMenuLine} />}
                    mr="2"

                >

                </IconButton>
            )}
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex align="center" ml="auto">
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}