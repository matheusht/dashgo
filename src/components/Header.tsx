import { Flex, Text } from '@chakra-ui/react'

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
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                Dashgo
                <Text as="span" color="pink.500">.</Text>
            </Text>
        </Flex >
    );
}