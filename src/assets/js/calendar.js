
//calenderfunction
$( document ).ready(function() {
  console.log( "ready!" );

  if($("#calendar")[0]){
    $("#calendar").fullCalendar();
  }
})

$('#calendar').fullCalendar({
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
      end    : '2017-07-09T18:00:00',
      allDay : false // will make the time show
    }],
    color: "black",
    textColor: "yellow"
  }]
});
