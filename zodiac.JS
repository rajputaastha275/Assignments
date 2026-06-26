let date, month;
date = parseInt(prompt("Enter Date"));
month = prompt("Enter month");
if(date >= 1 && date <= 31)
{
if((date >= 21 && month == "March" || month == "march" || month == "MARCH" && date <=31)||(date <= 19 && month == "April" || month == "april" || month == "APRIL" && date <=30))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            
            <td> ${date}</td>
            <td>${month}</td>
            <td>Aries</td>
            <td>Fire</td>
            <td>Energetic, bold, and pioneering</td>
        </tr>
    </tbody>

</table>`)
}
 else if((date >= 20 && month == "April" || month == "april" || month == "APRIL" && date <=30)||(date <= 20 && month == "May"|| month == "may" || month == "MAY" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Taurus</td>
            <td>Earth</td>
            <td>Reliable, patient, and practical</td>
        </tr>
    </tbody>

</table>`)
}
 else if((date >= 21 && month == "May" || month == "may" || month == "MAY" && date <=31)||(date <= 20 && month == "June" || month == "june" || month == "JUNE" && date <=30))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Gemini</td>
            <td>Air</td>
            <td>Adaptable, outgoing, and intellectual</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 21 && month == "June" || month == "june" || month == "JUNE" && date <=30)||(date <= 22 && month == "July" || month == "july" || month == "JULY" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Cancer</td>
            <td>Water</td>
            <td>Nurturing, intuitive, and emotional</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 23 && month == "July" || month == "july" || month == "JULY" && date <=31)||(date <= 22 && month == "August" || month == "august" || month == "AUGUST" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Leo</td>
            <td>Fire</td>
            <td>Confident, charismatic, and generous</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 23 && month == "August" || month == "august" || month == "AUGUST" && date <=31)||(date <= 22 && month == "September" || month == "september" || month == "SEPTEMBER" && date <=30))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Virgo</td>
            <td>Earth</td>
            <td>Analytical, meticulous, and helpful</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 23 && month == "September" || month == "september" || month == "SEPTEMBER" && date <=30)||(date <= 22 && month == "October" || month == "october" || month == "OCTOBER" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Libra</td>
            <td>Air</td>
            <td>Diplomatic, fair-minded, and social</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 23 && month == "October"  || month == "october" || month == "OCTOBER" && date <=31)||(date <= 21 && month == "November"  || month == "november" || month == "NOVEMBER" && date <=30))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Scorpio</td>
            <td>Water</td>
            <td>Passionate, resourceful, and brave</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 22 && month == "November" || month == "november" || month == "NOVEMBER" && date <=30)||(date <= 21 && month == "December" || month == "december" || month == "DECEMBER" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Sagittarius</td>
            <td>Fire</td>
            <td>Optimistic, adventurous, and honest</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 22 && month == "December" || month == "december" || month == "DECEMBER" && date <=31)||(date <= 19 && month == "January" || month == "january" || month == "JANUARY" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Capricorn</td>
            <td>Earth</td>
            <td>Disciplined, responsible, and ambitious</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 20 && month == "January" || month == "january" || month == "JANUARY" && date <=31)||(date <= 18 && month == "February" || month == "february" || month == "FEBRUARY" && date <=29))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Aquarius</td>
            <td>Air</td>
            <td>Progressive, original, and independent</td>
        </tr>
    </tbody>

</table>`)
}
else if((date >= 19 && month == "February" || month == "february" || month == "FEBRUARY" && date <=29)||(date <= 20 && month == "March" || month == "march" || month == "March" && date <=31))
{
document.write(`<table width = "100%" border = "1">
    <thead>
        <tr>
            <th>Date</th>
            <th>Month</th>
            <th>Sign</th>
            <th>Element</th>
            <th>Core Traits</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${date}</td>
            <td>${month}</td>
            <td>Pisces</td>
            <td>Water</td>
            <td>Compassionate, artistic, and intuitive</td>
        </tr>
    </tbody>

</table>`)
}
else
{
    document.write("Invalid date or month")
}
}
else
{
    document.write("Invalid date or month") 
}
