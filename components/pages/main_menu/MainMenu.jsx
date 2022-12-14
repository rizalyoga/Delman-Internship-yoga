import React from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
// Layout
import Layout from "../../layout/Layout";

// Icon
import { BiRightArrowAlt } from "react-icons/bi";

const MainMenu = () => {
  const router = useRouter();

  const toTextTransformPage = () => {
    router.push("/change-title");
  };

  const toFetchDataPage = () => {
    router.push("/fetching");
  };

  return (
    <Layout>
      <div className="container">
        <Center minH="90vh">
          <Box p="5" width={"47%"}>
            <Text textAlign="center" fontSize="2.5rem" fontWeight="bold" mb={5}>
              Internship Program
            </Text>
            <hr />
            <Flex gap="30px" mt={8}>
              <Box
                p="20px"
                minH="150px"
                flexBasis={"50%"}
                boxShadow="lg"
                borderWidth="1px"
              >
                <Text
                  fontSize="1.3rem"
                  fontWeight={"semibold"}
                  cursor="pointer"
                  className="link__div"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={toTextTransformPage}
                >
                  Title Tansformer
                  <BiRightArrowAlt />
                </Text>
                <Text mt="10px">A simple title transformation panel</Text>
              </Box>
              <Box
                p="20px"
                minH="150px"
                flexBasis={"50%"}
                boxShadow="md"
                borderWidth="1px"
              >
                <Text
                  fontSize="1.3rem"
                  fontWeight={"semibold"}
                  cursor="pointer"
                  className="link__div"
                  _hover={{
                    textDecoration: "underline",
                  }}
                  onClick={toFetchDataPage}
                >
                  User Fetcher
                  <BiRightArrowAlt />
                </Text>
                <Text mt="10px">
                  A simple API fetching and rendering process
                </Text>
              </Box>
            </Flex>
          </Box>
        </Center>
      </div>
    </Layout>
  );
};

export default MainMenu;
