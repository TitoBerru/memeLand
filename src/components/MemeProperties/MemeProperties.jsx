const MemeProperties = ({
	textNumber,
	memeTextSize,
	onSetMemeText,
	onSetMemeTextSize,
	onSetMemeTextColor,
}) => {
	return (
		<div>
			<input
				type="text"
				className="inputText"
				onChange={onSetMemeText}
				placeholder={` ${textNumber}`}
			/>
			<p> {textNumber} SIZE</p>
			<input
				type="range"
				min="0"
				max="52"
				value={memeTextSize}
				onChange={onSetMemeTextSize}
			></input>
			<p>{textNumber} COLOR</p>
			<input type="color" onChange={onSetMemeTextColor}></input>
		</div>
	);
};

export default MemeProperties;
