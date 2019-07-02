const Actions = state => ({
    setShowOptions: showOptions => {
        state.showOptions = showOptions;
    },

    setEditMode: editMode => {
        state.editMode = editMode;
    },

    setColumns: columns => {
        state.columns = [...columns];
    },

    setTemp: entries => {
        state.temp = [...entries];
    },

    addColumn: () => {
        state.temp.push('[empty]');
    },

    deleteColumn: index => {
        state.temp.splice(index, 1);
    }
});

export default Actions;