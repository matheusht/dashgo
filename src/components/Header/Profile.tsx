import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>
                        Matheus
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        dev.matheustheodoro@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Caio Theodoro" src="https://github.com/matheusht.png" />
        </Flex>
    )

}