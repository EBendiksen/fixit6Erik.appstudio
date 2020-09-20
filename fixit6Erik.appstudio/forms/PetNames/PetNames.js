
/* On the 'pets' form, create an array named 'petNames' that contains the pet names below. 
Hint: remember to add quotes around each name to show it is a string.*/

let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let withMarmaduke = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"];
let pets = withMarmaduke.push('Marmaduke');

/* Use an array method to create a new array named "withMarmaduke" that holds the original array data with the string "Marmaduke" added as the last item. Use the 'pets' array in this one line of code. */


/* The program must let the user pick one of these
to do - there are many ways you can
write code to do this - think of one :)
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array.
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array.
> show the 'withMarmaduke' array data.
After each user-chosen activity (eg. remove 'Vinny'), output to the console the action taken ('remove Vinny') and the current state of the petNames array using this format:

The action taken was: Remove Vinny
The remaining array data are:
Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam
*/

let action =  prompt("Please type a letter corresponding to the following action you want to perform:\n a. remove Vinny \n b. remove Marty \n c. add Nancy to front \n d. add your name to the end.\n e. See where Riley is located in the array.\n f. See where Cindy is located.\n g. show the withMarmaduke array data.")
if (action === 'a') {
  let removedItem = petNames.splice(5, 1)
  console.log(`The action taken was: Remove Vinny.  The remaining array data are: ${petNames}`)
} else if (action === 'b') {
  let removedItem1 = petNames.splice(3, 1)
  console.log(`The action taken was: Remove Marty.  The remaining array data are: ${petNames}`)
} else if (action === 'c') {
  let addItem = petNames.unshift('Nancy')
  console.log(`The action taken was: Add Nancy to the front of the array.  The remaining array data are: ${petNames}`)
} else if (action === 'd') {
  let yourName = prompt("Please enter your name.")
  let addName = petNames.push(yourName)
  console.log(`The action taken was: Add your name to the end of the array.  The remaining array data are: ${petNames}`)
} else if (action === 'e') {
  let pos = petNames.indexOf('Riley')
  console.log(`The action taken was: See where Riley is located in the array.  Riley is located at position ${pos}. The remaining array data are: ${petNames}`)
} else if (action === 'f') {
  let pos1 = petNames.indexOf('Cindy')
  console.log(`The action taken was: See where Cindy is located in the array. Cindy is located at position ${pos1}. The remaining array data are: ${petNames}`)
} else if (action === 'g') {
  console.log(`The action taken was: Show the 'withMarmaduke' array data.  Here is the array: ${withMarmaduke}`)
} else {
  alert("Please enter a valid letter corresponding to an action")
}

  


/*Write some code that uses at least one array method to do something - pick an interesting one from  the MSN Javascript Array Reference Guide provided by Code Academy:  (Links to an external site.)
The program must let the user pick one of these to do - there are many ways you can write code to do this - think of one :)
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array. 
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array. 
> show the 'withMarmaduke' array data.
After each user-chosen activity (eg. remove 'Vinny'), output to the console the action taken ('remove Vinny') and the current state of the petNames array using this format: 

The action taken was: Remove Vinny
The remaining array data are: 
Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam
When you are completely done coding and it all works perfectly, in GH Desktop create a Pull Request and send it up to GitHub website. 
Then do a Pull Request, and then Merge (have to scroll down for this). GH will merge your branch (with your changes/commits) with the current master. This has the net effect of replacing or overwriting the master with your branch version. Now your branch is the new master!
OR

Scenario AB: Complete the Scenario above, then add the following requirements. 
Requirements: ----------------------------------------------------------------
Remember, after each user chosen activity (eg. remove 'Vinny'), output to the console the action taken and the current state of the petNames array using this format: 

The action taken was: Remove Vinny
The remaining data are: 
[Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam]

Using the original 'pets' array, use the .shift() array method and output the results.
Using the .unshift() array method, add the name 'Barney' to the petNames array.
Using an array method of your choice (see e above), add the pet names below to the end of the petNames array to make a new array that you name allPets. Remember to show the new array in the output. 

Ted, Fred, Jed, Ned, Ed, Zed 

Using the array method .join(), create a string variable named stringPets that holds all of the pet names separated by commas. That is, one big long string in this format: 

"Bob, Sam, Andy"

Using the .unshift() array method, add the name 'Agnes' to the petNames array. 

When you are completely done coding and it all works perfectly, in GH Desktop create a Pull Request. 

Then go to the Pull Request online, and click Merge (have to scroll down for this). GH will merge your branch (with your changes/commits) with the current master. This has the net effect of replacing or overwriting the master with your branch version. Now your branch is the new master!
On the Word doc, each person write the URL of each of your GitHub repositories. Label clearly.*/