//calenderfunction
$( document ).ready(function() {
  console.log( "ready!" );

  $('#calendar').fullCalendar({
    //editable: true,
    eventClick: function( event, jsEvent ){
      $(jsEvent).dropdown('open');
    },
    eventSources: [{
      events: [{
        title  : 'Founder workshop',
        start  : '2017-07-01'
      },
      {
        title  : 'event2',
        start  : '2017-07-05',
        end    : '2017-07-07'
      },
      {
        title  : 'Founder workshop',
        start  : '2017-07-09T12:00:00',
        //end    : '2017-07-09T18:00:00',
        //allDay : false // will make the time show
      }],
      color: "black",
      textColor: "yellow"
    }]
  });
  initDropdowns();
})

function initDropdowns() {
  $('.fc-event').attr("data-activate", "dropdown")
  $('.fc-event').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
   })
}
