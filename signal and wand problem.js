// Signal and Wand optimisation problem solution
// Author - Zack Akil, Created - 3/3/2016

function timeToWaitAtSignal(){

	if(Math.floor((Math.random() * 2))){
		return 0; // if its green
	}else{
		return Math.floor((Math.random() * 80) + 1); // if its red
	}
}

function performJourney(signals, wands, wandThreshold,useSpareWands){

	var time =0;
	var journeyTime = 0;
	var wandsToUse = wands;

	for (var j = 0; j < signals; j++) {

		time = timeToWaitAtSignal();

		if(time != 0){ // add 0 if its a green light
			if( ((signals - j)<=wandsToUse)&(useSpareWands)){ // use spare wands if enabled
				time = 0;
				wandsToUse --;
			}else if((time >= wandThreshold)&&(wandsToUse > 0)){
				time = 0;
				wandsToUse --;	
			}
		}
		journeyTime += time;
	}
	return journeyTime;
}

function averageJourneyTime(signals, wands, wandThreshold, loops,useSpareWands){

	var total = 0;

	for (var i = 0; i < loops; i++) {
		total += performJourney(signals,wands,wandThreshold,useSpareWands);
	}
	return total/loops;
}

function optimalWandUse(signals, wands, loops, useSpareWands){

	var results = "";
	var minWandTreshold;
	var minAvergeTime = 80;

	for(var i = 0; i < 80; i++){

		var avg = averageJourneyTime(signals,wands,i,loops,useSpareWands);
		if(avg < minAvergeTime){
			minAvergeTime = avg;
			minWandTreshold = i;
		}
		results += i.toString() + "," + avg.toString() + "\n";
	}

	return results + "optimal wand threshold : "
	 + minWandTreshold.toString()
	  + " with average time of "
	   + minAvergeTime.toString();
}
