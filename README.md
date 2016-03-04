# Signal and Wand optimisation problem 
#(Calvin's school commute)  


## The problem scene
Calvin has to cross several signals when he walks from his home to school. Each of these signals operate independently. They alternate every 80 seconds between green light and red light. At each signal, there is a counter display that tells him how long it will be before the current signal light changes. Calvin has a magic wand which lets him turn a signal from red to green instantaneously. However, this wand comes with limited battery life, so he can use it only for a specified number of times.

## The question
If the total number of signals is 2 and Calvin can use his magic wand only once, then what is the expected waiting time at the signals when Calvin optimally walks from his home to school?

## Code usage
After loading all of the [JS functions](https://github.com/ZackAkil/Java-Script-signal-wand-optimisation/blob/master/signal%20and%20wand%20problem.js) into a JS runtime console running the optimalWandUse function will output the average travel times for all values of the "wand use threshold" from 1 to 80 showing which value produces the lowest estimated time of travel along with the value of the lowest estimated time of travel.

#### Example code
```javascript
var signals = 2; // number of signals Calvin needs to cross
var wands = 1; // number of times Calvin can use the wand
var loops = 1000000; // number of interations that will be used for calculating the average
var useSpareWands = true; // flag for using spare wands for red lights 

optimalWandUse(signals, wands, loops, useSpareWands);
```

## Results
The chart below shows the performance for different values of when to use the wand when the signal is red.

The blue line is the performance when Calvin ignores when he has spare wand uses and will only ever use a wand if the time to wait is greater than the threshold value.

The green line is the performance when Calvin uses the wand if he has enough to use on all of the remaining signals.

#### When using spare wands is enabled:
The estimated time Calvin takes with 2 signals using 1 wand is ≈ **8.9 seconds** with a wand use threshold of  ≈ **20 seconds**.

#### When using spare wands is disabled:
The estimated time Calvin takes with 2 signals using 1 wand is ≈ **9.3 seconds** with a wand use threshold of  ≈ **13 seconds**.


![Optimisation chart][chart]

[chart]: https://github.com/ZackAkil/Java-Script-signal-wand-optimisation/blob/master/optimisation.chart.png "Optimisation chart"
