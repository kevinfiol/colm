const BrowserStorage = {
    getAll: () => browser.storage.local.get(),
    clearData: () => browser.storage.local.clear(),
    saveToStorage: options => browser.storage.local.set(options)
};

export default BrowserStorage;