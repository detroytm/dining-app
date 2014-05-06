function checkTime()
{
	var date = new Date();
	var day = date.getDay();
	var hour = now.getHours();
	var minute = now.getMinutes();
	
	switch(day)
	{
		case 0:
			if(hour > 12)
			{
				document.getElementById('carrier').src="red.png";
			}
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
	}
}