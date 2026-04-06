class History {
    constructor (id, cityName, status) {
        this.id = id;
        this.cityName = cityName;
        this.status = status;
        document.addEventListener("HistoryChange", (e) => {
            if (this.id === e.detail.id) {
                this.status = "active";
            } else if (this.status === "active"){
                this.status = "clicked";
            }
        });
    }
}