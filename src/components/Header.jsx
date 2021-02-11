import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
        >
            <Flex align="middle">
                <Heading as="h1" size="md">Users</Heading>
                <Divider />
            </Flex>
        </Flex>
    );
};

export default Header;