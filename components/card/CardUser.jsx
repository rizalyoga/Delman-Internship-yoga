import React from "react";
import styles from "./CardUser.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const CardUser = ({ data }) => {
  console.log(data);

  const checkGender = () => {
    if (data[0]?.gender === "female") {
      return styles.card__container_female;
    } else {
      return styles.card__container_male;
    }
  };

  return (
    <Box
      p="10"
      maxW="350px"
      boxShadow="2xl"
      my="30px"
      borderRadius={"lg"}
      className={checkGender()}
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Box>
          <Image
            // src={"/user.jpg"}
            src={data[0]?.picture.medium}
            alt="avatar-user"
            height="90px"
            width="90px"
            className={styles.avatar}
          />
        </Box>
        <Text mt="3" fontSize="large">
          {`${data[0]?.name.title} ${data[0]?.name.first} ${data[0]?.name.last}`}
        </Text>
        <Text mt="3" fontSize="normal" color="gray.500">
          {data[0]?.email}
        </Text>

        <Flex justifyContent="space-evenly" width="100%" gap="30px" mt="10">
          <Box>
            <Text fontWeight="bold" textAlign="center">
              {data[0]?.nat}
            </Text>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              Nationality
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" textAlign="center">
              {data[0]?.dob.age}
            </Text>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              Age
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CardUser;
