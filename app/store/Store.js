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
    ],
});
