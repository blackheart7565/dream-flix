import React, { useEffect, useState, } from "react";

import MediaServices from "../../../services/MediaServices";
import { mediaConfig } from "../../../api/config/mediaConfig";
import { Hero } from "../../elements/Home/Hero";

import type { IMediaListCommonResult } from "../../../types/response/mediaResponse";

import "./Home.scss";

interface IHomeProps { }

export const Home: React.FC<IHomeProps> = (): JSX.Element => {
	const [mediaList, setMediaList] = useState<IMediaListCommonResult[]>([]);

	useEffect((): void => {
		const fetchData = async (): Promise<void> => {
			const data = await MediaServices.getMediaListByMediaType({
				mediaType: mediaConfig.types.movie,
				mediaCategory: mediaConfig.category.popular,
				page: 1,
			});

			setMediaList(data.results);
		};
		fetchData();
	}, []);

	return (
		<div className="relative">
			<Hero backgroundImage={mediaConfig.poster_path(mediaList[0]?.backdrop_path)} />
		</div>
	);
};