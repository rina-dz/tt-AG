Ext.define("tt-AG.store.Store", {
    extend: "Ext.data.Store",
    alias: "store.Store",
    model: "tt-AG.model.Model",
    data: [
        {
            id: 1, name: "Notebook Lenovo", description: "Ноутбук Lenovo, описание ноутбука: 'он классный!'", price: 100.0, amt: 2,
        },
        {
            id: 2, name: "Keyboard OKLICK", description: "Клавиатура OKLICK, тоже очень классная", price: 50, amt: 8,
        },
        {
            id: 3, name: "Network adapter", description: "Адаптер, ваще отпад, подходит ноутбуку", price: 7, amt: 0,
        },
        {
            id: 4, name: "Mouse Мышь", description: "Очень классная мышь, говорит пи-пи", price: 5000, amt: 68,
        },
        {
            id: 5, name: "Notebook Ovonel", description: "Ноутбук Ovonel, описание ноутбука: 'не Lenovo!'", price: 201.0, amt: 100,
        },
        {
            id: 6, name: "Rat Мышь", description: "Инновация - первая в мире мышь-крыса", price: 350.0, amt: 10,
        },
        {
            id: 7, name: "Network complicater", description: "Очередная инновация - усложнитель для вашей техники", price: 555.0, amt: 0,
        },
        {
            id: 8, name: "Keyboard OKROSHKA", description: "Клавиатура с летней атмосферой", price: 1000.0, amt: 222,
        },
    ],
});
