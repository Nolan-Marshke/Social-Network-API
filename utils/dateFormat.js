const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    

const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

let hours = date.getHours();
const minutes = date.getMinutes().toString().padStart(2, '0');
const period = hours >= 12 ? 'PM' : 'AM';



hours = hours % 12;
hours = hours ? hours : 12;

const formattedTime = `${hours}:${minutes} ${period}`;

return `${formattedDate} at ${formattedTime}`;

};


module.exports = formatDate;