
var lhsbs     = getVariableValue("IO_LHScreedbarstatus");

var rhsbs     = getVariableValue("IO_RHScreedbarstatus");

var bhsbs     = getVariableValue("IO_BaseScreedbarstatus");

var lhsb     = getVariableValue("IO_LHScreedtempsenrstatus");

var rhsb     = getVariableValue("IO_RHScreedtempsenrstatus");

var bhsb     = getVariableValue("IO_BaseScreedtempsenrstatus");


var lhst     = getVariableValue("Leftscreedextensiontemprature");

var rhst     = getVariableValue("Rightscreedextensiontemprature");

var bhst     = getVariableValue("Basescreedextensiontemprature");
var hms       = getVariableValue("IO_hydralicmotorstatus");


var myColorGreen = new Array(4);


myColorGreen[0] = 57;

myColorGreen[1] = 181;

myColorGreen[2] = 74;

myColorGreen[3] = 255;


var myColorRed = new Array(4);


myColorRed[0] = 237;

myColorRed[1] = 28;

myColorRed[2] = 36;

myColorRed[3] = 255;

var myColorwhite = new Array(4);


myColorwhite[0] = 255;

myColorwhite[1] = 255;

myColorwhite[2] = 255;

myColorwhite[3] = 255;


var lhsttemp = (lhst);

var lhsActT = lhsttemp.toString();


var rhsttemp = (rhst);

var rhsActT = rhsttemp.toString();


var bhsttemp = (bhst);

var bhsActT = bhsttemp.toString();


if 
((lhsb == 3) || (lhsb == 0))
{
 setProperty(7606, "Visible", true);
 setProperty(7605, "Visible", false);
 setProperty(7604, "Visible", false);
    setVariableValue("LHTempActVal", lhsActT);

}

else if 
(lhsbs == 2 && hms == 2)
{
 setProperty(7606, "Visible", false);
 setProperty(7605, "Visible", true);
 setProperty(7604, "Visible", false);
 setVariableValue("LHTempActVal", lhsActT);
}

else 

{ 
 setProperty(7606, "Visible", true);
 setProperty(7605, "Visible", false);
 setProperty(7604, "Visible", false);
    setVariableValue("LHTempActVal", lhsActT);
}



if 
((rhsb == 3) || (rhsb == 0))
{
 setProperty(7601, "Visible", true);
 setProperty(7602, "Visible", false);
 setProperty(7603, "Visible", false);
setVariableValue("RHTempActVal", rhsActT);

}

else if 
(rhsbs == 2 && hms ==2)
{
 setProperty(7601, "Visible", false);
 setProperty(7602, "Visible", true);
 setProperty(7603, "Visible", false);
 setVariableValue("RHTempActVal", rhsActT);
}

else

{ 
 setProperty(7601, "Visible", true);
 setProperty(7602, "Visible", false);
 setProperty(7603, "Visible", false);
setVariableValue("RHTempActVal", rhsActT);
}



if 
((bhsb == 3) || (bhsb == 0))
{
 setProperty(7607, "Visible", true);
 setProperty(7609, "Visible", false);
 setProperty(7608, "Visible", false);
   setVariableValue("BASETempActVal", bhsActT);
}

else if 
(bhsbs == 2 && hms == 2)
{
 setProperty(7607, "Visible", false);
 setProperty(7609, "Visible", true);
 setProperty(7608, "Visible", false);
   setVariableValue("BASETempActVal", bhsActT);
}

else

{ 
 setProperty(7607, "Visible", true);
 setProperty(7609, "Visible", false);
 setProperty(7608, "Visible", false);
   setVariableValue("BASETempActVal", bhsActT);
}


















