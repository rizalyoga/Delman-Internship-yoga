import React, { useState } from "react";
import { Center, Text, Flex, Button, Spinner } from "@chakra-ui/react";

// Data
import { fetchDataUser } from "../../../utils/fetchDataUser";

// Layout
import Layout from "../../layout/Layout";

// Component
import SkeletonLoading from "../../skeleton_loading/SkeletonLoading";
import CardUser from "../../card/CardUser";

const UserFetcher = () => {
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  const setWhenLoading = () => {
    if (loading) {
      return <Spinner size="sm" />;
    } else if (!loading && !dataUser?.length) {
      return "Fetch User";
    } else {
      return "Refetch User";
    }
  };

  const fetchDataUserHandler = () => {
    setLoading((prev) => !prev);
    fetchDataUser().then((res) => {
      setDataUser(res?.results);
      setLoading((prev) => !prev);
    });
  };

  return (
    <Layout titlePage={"| Title Transformer"}>
      <div className="container">
        <Center>
          <Flex
            justifyContent={"center"}
            flexDirection="column"
            minH="90vh"
            gap="15px"
          >
            <Text fontSize="2.2rem" fontWeight="bold" textAlign="center">
              User Fetcher
            </Text>
            <hr />
            {dataUser?.length ? (
              <CardUser data={dataUser} />
            ) : (
              <SkeletonLoading />
            )}
            <hr />
            <Button
              width="100%"
              onClick={fetchDataUserHandler}
              disabled={loading ? true : false}
            >
              {setWhenLoading()}
            </Button>
          </Flex>
        </Center>
      </div>
    </Layout>
  );
};

export default UserFetcher;
