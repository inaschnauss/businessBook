//calenderfunction
$( document ).ready(function() {
  console.log( "ready!" );

  $('#calendar').fullCalendar({
    //editable: true,
    eventClick: function( event, jsEvent ){
      $(jsEvent).dropdown('open');
    },
    dayClick: function( date, jsEvent ){
      if($(jsEvent.target).hasClass("fc-other-month")){
        $('#calendar').fullCalendar( 'gotoDate', date )
      }
    },
    eventSources: [{
      events: [{
        title  : 'FounderWorkshop I',
        start  : '2017-07-01'
      },
      {
        title  : 'FounderWorkshop II',
        start  : '2017-07-05',
        end    : '2017-07-07'
      },
      {
        title  : 'Meet & Greet',
        start  : '2017-07-21',
        //end    : '2017-07-09T18:00:00',
        //allDay : false // will make the time show
      },
      {
        title  : 'ShowTime',
        start  : '2017-07-28',
        borderColor: 'red'
      }],
      color: '#4dd0e1',
      textColor: "#5d4037",

    }]
  });
  //initDropdowns();
})

// function initDropdowns() {
//   $('.fc-day-grid-event').attr("data-activates", "dropdown")
//   $('.fc-day-grid-event').dropdown({
//     inDuration: 300,
//     outDuration: 225,
//     constrainWidth: false, // Does not change width of dropdown to that of the activator
//     hover: false, // Activate on hover
//     gutter: 0, // Spacing from edge
//     belowOrigin: true, // Displays dropdown below the button
//     alignment: 'left', // Displays dropdown with edge aligned to the left of button
//     stopPropagation: false // Stops event propagation
//    })
// }
