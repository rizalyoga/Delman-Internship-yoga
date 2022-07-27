import React from "react";
import Layout from "../components/layout/Layout";
import { Center, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

// Icons
import { BiLeftArrowAlt } from "react-icons/bi";

const PageNotfound = () => {
  const router = useRouter();

  const toHomePage = () => {
    router.push("/");
  };

  return (
    <Layout>
      <div className="container">
        <Center minH="90vh">
          <box>
            <Text fontSize="2.5rem" fontWeight="bold" mb="5">
              Page not found
            </Text>
            <hr />
            <Flex
              justifyContent="center"
              alignItems="center"
              gap="8px"
              fontSize="1.2rem"
              mt="5"
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
              onClick={toHomePage}
            >
              <BiLeftArrowAlt />
              <Text fontWeight="bold">Back to Home</Text>
            </Flex>
          </box>
        </Center>
      </div>
    </Layout>
  );
};

export default PageNotfound;
