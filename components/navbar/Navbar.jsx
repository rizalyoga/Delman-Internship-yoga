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
  Spacer,
  Divider,
} from "@chakra-ui/react";

const Navbar = () => {
  const router = useRouter();

  // Back toHome Page
  const toHome = () => {
    router.push("/");
  };

  // Get Breadcrumb title by path
  const setPath = () => {
    if (router.route == "/change-title") {
      return "Title Transformer";
    } else if (router.route == "/fetching") {
      return "User Fetcher";
    }
  };

  // Set Hidden display for Breadcrumb if 404
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
          <Spacer>
            <Divider orientation="vertical" />
          </Spacer>
          <Breadcrumb mt={"4.5px"} className={checkRoute()}>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={toHome}>
                Internship Program
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink>{setPath()}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
