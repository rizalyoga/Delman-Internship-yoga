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

  console.log(router);

  const setPath = () => {
    if (router.route == "/change-title") {
      return "Title Transformer";
    } else if (router.route == "/fetching") {
      return "User Fetcher";
    }
  };

  return (
    <div className={styles.Navbar__container}>
      <Box className="container">
        <Flex gap={"10px"} alignItems="center">
          <Text fontSize="1.5rem">delman.io</Text>
          <Breadcrumb mt={"4.5px"}>
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
