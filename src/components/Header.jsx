import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
    <div className="flex gap-10 text-2xl  mx-auto  " >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/"  className="hover:text-gray-400 hover:border-2 hover:rounded-lg hover:px-2 text-2xl ">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges"  className="hover:text-gray-400 text-xl hover:border-2 hover:rounded-lg hover:px-2">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins"  className="hover:text-gray-400 text-xl hover:border-2 hover:rounded-lg hover:px-2">Coins</Link>
      </Button>
    </div>
    </HStack>
    </>
  );
};

export default Header;
