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
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    return month[date.getMonth()];
}

