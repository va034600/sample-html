function fetchData() {
    return {
        type: "FETCH"
    };
}

export function fetchTest() {
    return (dispatch, getState)  => {
        var a = getState().form;
        alert("firstName:" + a.mainForm.values.firstName + " favoriteColor:" + a.mainForm.values.favoriteColor);
        dispatch(fetchData());
    };
}