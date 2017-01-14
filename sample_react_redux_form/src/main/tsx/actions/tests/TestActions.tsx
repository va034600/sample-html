function fetchData() {
    return {
        type: "FETCH"
    };
}

export function fetchTest() {
    return (dispatch, getState)  => {
        var a = getState().form;
        alert(a.mainForm.values.firstName);
        alert(a.mainForm.values.favoriteColor);
        dispatch(fetchData());
    };
}