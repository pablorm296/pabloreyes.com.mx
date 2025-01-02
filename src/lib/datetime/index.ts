const getIsoDateString = (date: Date): string => {
    return date.toISOString();
};

const getHumanReadableDate = (date: Date): string => {
    return date.toLocaleDateString("es-MX", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        timeZone: "UTC",
    });
};

const formatDateTime = (date: Date) => {
    const isoDate = getIsoDateString(date);
    const humanDate = getHumanReadableDate(date);

    return {
        isoDate,
        humanDate,
    };
};

export { formatDateTime };
