import React, { useState } from "react";
import { Center, Box, Text, Flex, Button } from "@chakra-ui/react";

// Layout
import Layout from "../../layout/Layout";

const TitleTransformer = () => {
  return (
    <Layout>
      <div className="container">
        <Center minH="90vh">
          <Box p="5" minW="30%">
            <Text textAlign="center" fontWeight="bold" fontSize="2.5rem">
              Internship Program - 1
            </Text>

            <Box my={5}>
              <hr />
              <Flex justifyContent="center" py={5} gap="20px">
                <Text>Running for : 0s</Text>
                <Text>Tutle count : 1</Text>
              </Flex>
              <hr />
              <Flex justifyContent="space-between" mt={5} gap="30px">
                <Button>Randomize Color</Button>
                <Button>Add title</Button>
                <Button>Remove title</Button>
              </Flex>
            </Box>
          </Box>
        </Center>
      </div>
    </Layout>
  );
};

export default TitleTransformer;
