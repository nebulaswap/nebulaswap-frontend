import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<React.PropsWithChildren<Props>> = ({
  cakePriceUsd,
  color = "textSubtle",
  showSkeleton = true,
}) => {
  return cakePriceUsd ? (
    <PriceLink
      href="/swap?outputCurrency=0x144F6D1945DC54a8198D4a54D4b346a2170126c6"
      target="_blank"
    >
      {/* <LogoRound width="24px" mr="8px" /> */}
      <img src={"/images/1/tokens/nebula.png"} width="24px" />
      <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
