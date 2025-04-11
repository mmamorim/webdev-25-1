
const storageKey = "todoData"

const sgdb = {
    data: {
        todos: {}
    },
    newID(prefix = "", len = 4) {
        // Generate a unique ID with prefix string
        let _nome = prefix.normalize('NFD').replace(/[ \u0300-\u036f]/g, "").toUpperCase().substr(0, 10)
        return _nome + ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        ).substr(0, len);
    },
    init() {
        // Read data from localstorage
        let dataText = localStorage.getItem(storageKey)
        console.log('dataText',dataText);
        if(dataText) {
            let data = JSON.parse(dataText)
            sgdb.data = data    
        }
        console.log("sgdb.data",sgdb.data)
    },
    getData() {
        // Clones data for use in useState
        return JSON.parse(JSON.stringify(sgdb.data))
    },    
    write() {
        // Write data to localstorage
        let dataText = JSON.stringify(sgdb.data) 
        localStorage.setItem(storageKey,dataText)
    }
}

export default sgdb