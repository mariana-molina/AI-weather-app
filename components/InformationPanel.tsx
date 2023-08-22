type InformationPanelProps = {
	city: string;
	lat: string;
	long: string;
	results: Root;
};

function InformationPanel({ city, lat, long, results }: InformationPanelProps) {
	return (
		<div className="p-10 bg-gradient-to-br from-[#394f68] to-[#183B7E] text-white">
			<div className="pb-5">
				<h1 className="font-bold text-6xl">{decodeURI(city)}</h1>
				<p>
					Long/Lat:{long}, {lat}
				</p>
			</div>
		</div>
	);
}

export default InformationPanel;
