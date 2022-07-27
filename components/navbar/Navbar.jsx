import React from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

import {
  Box,
  Flex,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Navbar = () => {
  const router = useRouter();

  const toHome = () => {
    router.push("/");
  };

  const setPath = () => {
    if (router.route == "/change-title") {
      return "Title Transformer";
    } else if (router.route == "/fetching") {
      return "User Fetcher";
    }
  };

  const checkRoute = () => {
    if (router.route === "/404") {
      return styles.hidden;
    }
  };

  return (
    <div className={styles.Navbar__container}>
      <Box className="container">
        <Flex gap={"20px"} alignItems="center">
          <Text fontSize="1.5rem">delman.io</Text>
          <Breadcrumb mt={"4.5px"} className={checkRoute()}>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={toHome}>
                Internship Program
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{setPath()}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
