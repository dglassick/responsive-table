import styled from "styled-components";
import { Table as ChakraTable, Thead as ChakraThead, Tr as ChakraTr, Td as ChakraTd, Tbody as ChakraTbody, Tfoot as ChakraTfoot, Th as ChakraTh, Box } from "@chakra-ui/react";

export const Table = styled(ChakraTable)`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Thead = styled(ChakraThead)``;

export const Tr = styled(ChakraTr)`
  border-bottom: 1px solid #f2f2f2;
`;

export const Th = styled(ChakraTh)`
  text-align: left;
  padding: 0.85rem;
  white-space: nowrap;
`;

export const Tbody = styled(ChakraTbody)``;

export const Td = styled(ChakraTd)`
  text-align: left;
  padding: 0.85rem;
  vertical-align: top;
`;

export const ThFlex = styled(Box)`
  display: flex;
  padding: 0.85rem;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.35s;

  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
  }
`;