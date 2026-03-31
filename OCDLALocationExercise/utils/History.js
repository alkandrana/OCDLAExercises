class History {
    constructor (id, cityName, status) {
        this.id = id;
        this.cityName = cityName;
        this.status = status;
    }
}

const btnStatusUpdated = new CustomEvent("HistoryChange", {
    detail: {
        id:
    }
})