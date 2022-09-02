import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Sidebar } from "../components/Form/Sidebar";
import { Header } from "../components/Header";
import Chart from 'react-apexcharts';

const options = {

};

const series = [
    { name: 'series-1', data: [18, 41, 35, 51, 49, 62, 69] },
]

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    // pb="4"
                    >
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius={8}
                    // pb="4"
                    >
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    );
}