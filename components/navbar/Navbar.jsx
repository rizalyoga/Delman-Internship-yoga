import React from "react";
import styles from "./Navbar.module.css";
import { Box, Center, Flex, Badge, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className={styles.Navbar__container}>
      <Box className="container">
        <Flex gap={"10px"}>
          <Text fontSize="1.5rem">delman.io</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
