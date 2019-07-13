const Actions = (state, deps) => ({
    setIsLoaded: isLoaded => {
        state.isLoaded = isLoaded;
    },

    setShowOptions: showOptions => {
        state.showOptions = showOptions;
    },

    setEditMode: editMode => {
        state.editMode = editMode;
    },

    setColumns: columns => {
        state.columns = deps.clone(columns);
    },

    setTemp: temp => {
        state.temp = deps.clone(temp);
    },

    editTempColumn: (index, content) => {
        state.temp[index].content = content;
    },

    addTempColumn: () => {
        const column = { key: deps.NanoID.gen(), content: '' };
        state.temp.push(column);
        console.log(state);
    },

    deleteTempColumn: index => {
        state.temp.splice(index, 1);
    },

    /**
     * Batch State Changes
     */
    loadFromObject: obj => {
        state.columns = deps.clone(obj.columns);
        state.files = deps.clone(obj.files);

        state.options.autohideMenu = obj.options.autohideMenu;
        state.options.width = obj.options.width;
        state.options.height = obj.options.height;
        state.options.bgColor = obj.options.bgColor;
        state.options.fontColor = obj.options.fontColor;
        state.options.customCss = obj.options.customCss;
    },

    setDefaults: () => {
        state.columns = [];
        state.files = {};

        state.options.autohideMenu = false;
        state.options.width = '80';
        state.options.height = '100';
        state.options.bgColor = '#111111';
        state.options.fontColor = '#ffffff';
        state.options.customCss = '';
    },
    
    /**
     * User Options
     */
    setWidth: width => {
        state.options.width = width;
    },

    setHeight: height => {
        state.options.height = height;
    },

    setBgColor: bgColor => {
        state.options.bgColor = bgColor;
    },

    setFontColor: fontColor => {
        state.options.fontColor = fontColor;
    },

    setCustomCss: customCss => {
        state.options.customCss = customCss;
    },

    setAutohideMenu: autohideMenu => {
        state.options.autohideMenu = autohideMenu;
    },

    setLocalFile: (key, file) => {
        state.files[key] = file;
    },

    removeLocalFile: key => {
        delete state.files[key];
    }
});

export default Actions;