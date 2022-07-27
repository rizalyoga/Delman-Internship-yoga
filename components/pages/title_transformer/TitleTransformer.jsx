import React, { useState, useEffect } from "react";
import { Center, Box, Text, Flex, Button } from "@chakra-ui/react";
import { getRandomColor } from "../../../utils/getRandomColor";

// Layout
import Layout from "../../layout/Layout";

const TitleTransformer = () => {
  const [title, setTitle] = useState(["Internship Program - 1"]);
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);

  // Function for set Title State
  const addTitle = () => {
    if (title.length < 5) {
      setTitle([...title, `Internship Program - ${title.length + 1}`]);
    }
  };

  const removeTitle = () => {
    if (title.length > 1) {
      setTitle(title.filter((_, i) => i !== title.length - 1));
    }
  };

  // Functions for Enable - Disable Buttons
  const disabelButtonRemove = () => {
    if (title.length < 2) {
      return true;
    } else {
      false;
    }
  };

  const disabelButtonAdd = () => {
    if (title.length == 5) {
      return true;
    } else {
      false;
    }
  };

  /* -------------------- Functions for handle random color ------------------- */

  // Function for set true or false running timer state
  const randomColor = () => {
    setRunning((prev) => !prev);
  };

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSecond((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
      setSecond(0);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <Layout titlePage={"| User Fetcher"}>
      <div className="container">
        <Center minH="90vh">
          <Box p="5" minW="30%">
            {title.map((el, idx) => (
              <Text
                key={idx}
                textAlign="center"
                fontWeight="bold"
                fontSize="2.4rem"
                my="20px"
                color={getRandomColor(running)}
              >
                {el}
              </Text>
            ))}
            <Box my={5}>
              <hr />
              <Flex justifyContent="center" py={5} gap="20px">
                <Text>Running for : {second}s</Text>
                <Text>Total count : {title.length}</Text>
              </Flex>
              <hr />
              <Flex justifyContent="space-between" mt={5} gap="30px">
                <Button onClick={randomColor}>
                  {running ? "Clear color" : "Randomize color"}
                </Button>
                <Button onClick={addTitle} disabled={disabelButtonAdd()}>
                  Add title
                </Button>
                <Button onClick={removeTitle} disabled={disabelButtonRemove()}>
                  Remove title
                </Button>
              </Flex>
            </Box>
          </Box>
        </Center>
      </div>
    </Layout>
  );
};

export default TitleTransformer;
