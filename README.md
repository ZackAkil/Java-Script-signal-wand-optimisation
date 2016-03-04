# Java-Script-signal-wand-optimisation

## The problem scene
Calvin has to cross several signals when he walks from his home to school. Each of these signals operate independently. They alternate every 80 seconds between green light and red light. At each signal, there is a counter display that tells him how long it will be before the current signal light changes. Calvin has a magic wand which lets him turn a signal from red to green instantaneously. However, this wand comes with limited battery life, so he can use it only for a specified number of times.

## The question
If the total number of signals is 2 and Calvin can use his magic wand only once, then what is the expected waiting time at the signals when Calvin optimally walks from his home to school?


## Resultant performace chart
The chart below shows the performance for different values of when to use the wand when the signal is red.

The blue line is the performance when Calvin ignors when he has spare wand uses and will only ever use a wand if the time to wait is greater than the threshold value.

The green line is teh performance when Calvin uses wand if he has enough to use on all of the remaining signals.

![Optimisation chart][chart]

[chart]: https://github.com/ZackAkil/Java-Script-signal-wand-optimisation/blob/master/optimisation.chart.png "Optimisation chart"
