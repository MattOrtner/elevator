- the the sensor can't be tripped when the elevator doors are closing bc
  the state thinks it's already closed... and says... what the fuck are we going
- once the door closes, button state change.
- when does the que change

all calls go to one array
filter by direction
make stops along and pick up others of the same direction
then handle, another call / direction

[case] what happens when a call is made in the same direction, but is past the elevator

- am i in motion
  -- if i am, and it's in the same direction that i'm going then make the stop an the way
- am i on that floor || do i have to move
- every floor needs to be passed on the way
  -- [side affects] - shows each floor it passes - makes a noise when it's arrived to the correct floor

# safety concerns

---

button is pressed
call is placed in a que...

the door is on the same floor...
the doors open...
[the person walks in]
they press a number inside

it has to go up bc it's on the ground floor

the number is greater then 0, so the elevator calls the same function the same number of times to move the up one floor at a time

(( THIS COULD BE DONE WITH A LOOP ))

two different things are happening

1. external calls
2. internal calls
