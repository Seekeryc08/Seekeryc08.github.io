function MakeMoney()
{	
	document.getElementById('mainTable').style.filter = 'alpha(opacity=20)';
	document.getElementById('mainTable').style.opacity = 0.2;
	
	document.getElementById('pop').style.display = '';

	return true;
}

function ClosePopup()
{
	document.getElementById('pop').style.display = 'none';

	document.getElementById('mainTable').style.filter = 'alpha(opacity=100)';
	document.getElementById('mainTable').style.opacity = 1;
	
	return false;
}
