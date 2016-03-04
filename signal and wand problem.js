function timeToWaitAtSignal(){

	if(Math.floor((Math.random() * 2))){
		return 0; // if its green
	}else{
		return Math.floor((Math.random() * 80) + 1); // if its red
	}
}

function averageTimeWaiting(loops){

	var total = 0;

	for (var i = 0; i < loops; i++) {
		total += timeToWaitAtSignal();
	};
	return total/loops;
}

function averageCalvin(signals, wands, wandThreshold, loops){

	var total = 0;

	for (var i = 0; i < loops; i++) {
		
		var journeyTime = 0;

		var wandsToUse = wands;
		for (var j = 0; j < signals; j++) {

			var time = timeToWaitAtSignal();

			if(time != 0){ // add 0 if its a green light
				if((signals - j)<=wandsToUse){ // 
					time = 0;
					wandsToUse --;
				}else if((time >= wandThreshold)&&(wandsToUse > 0)){
					time = 0;
					wandsToUse --;	
				}
			}
			journeyTime += time;
			
		}
		total += journeyTime;
	}

	return total/loops;
}

function optimalWandUse(signals, wands, loops){

	var results = "";
	var minWandTreshold;
	var minAvergeTime = 80;

	for(var i = 0; i < 80; i++){

		var avg = averageCalvin(signals,wands,i,loops);
		if(avg < minAvergeTime){
			minAvergeTime = avg;
			minWandTreshold = i;
		}
		results += avg.toString() + "\n";
	}

	return results + "optimal wand threshold : "
	 + minWandTreshold.toString()
	  + " with average time of "
	   + minAvergeTime.toString();
}