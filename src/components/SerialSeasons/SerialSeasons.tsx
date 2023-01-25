import React, { FC } from "react";
import { useGetSeasonsQuery } from "../../store/KinopoiskApiUnofficial/KAU.api";
interface IProps {
  kid: number;
}

const SerialSeasons: FC<IProps> = ({ kid }) => {
  const { isLoading, data } = useGetSeasonsQuery(kid, {});

  console.log(data);

  return <div>SerialSeasons</div>;
};

export default SerialSeasons;
