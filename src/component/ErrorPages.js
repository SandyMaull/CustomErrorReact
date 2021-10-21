import 
    {   
        Center,
        Text,
        Image,
        Box,
        SimpleGrid,
        useColorMode,
        useColorModeValue,
        Button,
        Link,
    } 
from "@chakra-ui/react";
import { Fragment } from "react";

const ErrorPages = props => {
    const { toggleColorMode } = useColorMode()
    const BgColor = useColorModeValue("purple.900", "gray.200")
    const TextColor = useColorModeValue("teal.200", "gray.800")
    const BoxColor = useColorModeValue("gray.500", "blue.300")
    const LinkColor = useColorModeValue("gray.900", "red.700")
    const ButtonName = useColorModeValue("Light Mode", "Dark Mode")
    const data = props.props
    return (
        <Fragment>
            <Center w="100vw" h="100vh" bg={BgColor}>
                <SimpleGrid
                    bg={BoxColor}
                    columns={{ sm: 1, md: 2 }}
                    spacing="8"
                    p="10"
                    textAlign="center"
                    rounded="lg"
                >
                    <Center>
                        <Box>
                            <Image 
                                src="/0.png"
                                borderRadius="full"
                                boxSize="150px"
                                alt="Kuronekosan"
                                boxShadow="lg"
                            />
                            <Button mt={4} size="sm" bg={BgColor} color={TextColor} onClick={toggleColorMode}>
                                {ButtonName}
                            </Button>
                        </Box>
                    </Center>
                    <Box>
                        <Text mb={3} w="100%" fontSize="5xl" color={TextColor}>
                            {/* 400 */}
                            { data.code }
                        </Text>
                        <Text w="100%" fontSize="xl" color={TextColor}>
                            { data.descJpn }
                        </Text>
                        <Text mb={3} w="100%" fontSize="xl" color={TextColor}>
                            { data.descEng }
                        </Text>
                        <Text w="100%" fontSize="sm" color={TextColor}>
                            { data.info }
                        </Text>
                        <Text w="100%" fontSize="sm" color={TextColor}>
                            Please Contact ServerAdmin at <Link href="mailto:kuro@kuronekosan.web.id" color={LinkColor}>kuro@kuronekosan.web.id.</Link>
                        </Text>
                    </Box>
                </SimpleGrid>
            </Center>
        </Fragment>
    )
}

export default ErrorPages