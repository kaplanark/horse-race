const compareFunction = (a, b) => {
	return (b.travelledDistance / b.scoreTime) - (a.travelledDistance / a.scoreTime);
}

export default compareFunction;