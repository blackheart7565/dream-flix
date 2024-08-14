import React from "react";
import classNames from "classnames";

interface IHeroProps {
	backgroundImage: string;
}

export const Hero: React.FC<IHeroProps> = ({
	backgroundImage,
}): JSX.Element => {
	return (
		<section className={classNames("relative w-screen h-screen overflow-hidden")}>
			<div className={"absolute top-0 left-0 w-full h-full z-[1] pointer-events-none select-none"}>
				<img
					src={backgroundImage}
					alt=""
					className={"w-full h-full object-cover object-center"}
				/>
				<span className={"block w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#01000c] to-[#01000c36]"}></span>
			</div>
			<div
				className={classNames(
					"container",
					"w-full h-full relative z-[2]"
				)}
			>
				<div className={"absolute bottom-[15rem] left-0 uppercase flex items-start justify-center flex-col gap-12"}>
					<h3
						className={"text-3xl font-medium text-white"}
					>
						<span className="text-[#818181]">coming up in</span> december 24</h3>
					<h1
						className={"text-8xl font-bold"}
					>
						The manda <span className="textBorder">lorian</span>
					</h1>
					<div className={"flex items-center gap-10"}>
						<button
							className={"px-12 py-6 tracking-wider bg-[#131314] font-bold uppercase border-2 border-transparent hover:border-white transition-colors duration-500 ease-in-out"}
						>
							Watch on disney
						</button>
						<button
							className={classNames(
								`
								relative 
								px-12 
								py-6 
								tracking-wider 
								bg-transparent 
								font-bold 
								uppercase 
								border-2 
								border-white 
								hover:text-black
								hover:bg-white
								transition-colors
								duration-500
								ease-in-out
							`
							)}
						>
							Watch the trailer
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};