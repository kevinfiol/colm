const NanoID = defaultSize => ({
    gen: () => {
        const crypto = self.crypto || self.msCrypto;
        const random = bytes => crypto.getRandomValues(new Uint8Array(bytes));
        const url =  '_~0123456789' +
            'abcdefghijklmnopqrstuvwxyz' +
            'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        ;
    
        let size = defaultSize || 21;
        let id = '';
        const bytes = random(size);
        
        while (0 < size--) {
            id += url[bytes[size] & 63];
        }
    
        return id;
    }
});

export default NanoID;