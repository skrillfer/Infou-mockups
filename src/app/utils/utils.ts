export const getFirstDayCurrentYear = (date: Date) =>{
    return new Date(date.getFullYear(), 0, 1);
}

export const getLastDayCurrentYear = (date: Date) =>{
    return new Date(date.getFullYear(), 11, 31);
}

export const getCurrentMonthFirstDay = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
export const getCurrentMonthLastDay = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export const getMonthName = (date:Date) =>{
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    return month[date.getMonth()];
}

