"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Colby Abbott
   Date:   2-10-20

	
*/

//ALL OF THE VARIABLES ARE CORRECT ON THE LEFT SIDE OF THE EQUAL SIGN
/* Set the date displayed in the calendar */
var thisDay =  new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'>" ;
tableHTML += "<caption> upcoming events</caption> ";
tableHTML += "<tr>"
tableHTML += "<th>date</th>";
tableHTML += "<th>Events</th>";
tableHTML += "<th>price</th> </tr>";
tableHTML +="</tr>";
var endDate = new Date(thisDay.getTime() + (14*24*60*60*1000));
//loop for the days
for(var i = 0 ; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay =  eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr> ";
      tableHTML += " <td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i]  + " </td>";
      tableHTML+=  "<td>" +  eventPrices[i]  + "</td>";
      tableHTML+= "</tr>";
   }
} 
//ending the table 
tableHTML += "</table>"
   document.getElementById("eventList").innerHTML = tableHTML;
