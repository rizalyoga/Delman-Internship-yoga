import React from "react";
import { Box, Flex, SkeletonText } from "@chakra-ui/react";

// Icons
import { FaUserCircle } from "react-icons/fa";

const SkeletonLoading = () => {
  return (
    <Box p="10" maxW="300px" boxShadow="2xl" my="30px">
      <Flex
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center"
      >
        <FaUserCircle fontSize={"6rem"} color="#A0AEC0" />
        <Box width={"100%"}>
          <SkeletonText mt="6" noOfLines={8} spacing="2" />
        </Box>
      </Flex>
    </Box>
  );
};

export default SkeletonLoading;
