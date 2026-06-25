let date, month;
date = parseInt(prompt("Enter Date"));
month = prompt("Enter month");
if((date >= 21 && month == "March")||(date <= 19 && month == "April"))
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
 else if((date >= 20 && month == "April")||(date <= 20 && month == "May"))
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
 else if((date >= 21 && month == "May")||(date <= 20 && month == "June"))
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
else if((date >= 21 && month == "June")||(date <= 22 && month == "July"))
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
else if((date >= 23 && month == "July")||(date <= 22 && month == "August"))
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
else if((date >= 23 && month == "August")||(date <= 22 && month == "September"))
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
else if((date >= 23 && month == "September")||(date <= 22 && month == "October"))
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
else if((date >= 23 && month == "October")||(date <= 21 && month == "November"))
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
else if((date >= 22 && month == "November")||(date <= 21 && month == "December"))
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
else if((date >= 22 && month == "December")||(date <= 19 && month == "January"))
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
else if((date >= 20 && month == "January")||(date <= 18 && month == "February"))
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
else if((date >= 19 && month == "February")||(date <= 20 && month == "March"))
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
    document.write("Enter valid date & month")
}