module.exports =  {
    /**
     * @param {Date} date
     * @param {Integer} days
     */
    addDays: (date, days) => new Date(date.setDate(date.getDate()+days));
}