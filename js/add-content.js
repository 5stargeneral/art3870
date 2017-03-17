<script language="JavaScript">
var myDate = new Date();

/* hour is before noon */
if ( myDate.getHours() < 12 )
{
    document.getElementById('greeting').innerHTML = "Good Morning!";
}
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
    document.getElementById('greeting').innerHTML = "Good Afternoon!";
}
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
   document.getElementById('greeting').innerHTML = "Good Evening!";
}
else  /* the hour is not between 0 and 24, so something is wrong */
{
    document.getElementById('greeting').innerHTML = "I'm not sure what time it is!";
}

/* remove the following in your live script. It is for testing */
document.write("<br /><br /> The hour is: ")
document.write( myDate.getHours() );

</script>

<p>This comes is after all the script has executed</p>
