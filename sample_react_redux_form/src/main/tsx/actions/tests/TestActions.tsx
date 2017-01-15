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

function load(data) {
    return {
        type: "redux-form-examples/account/LOAD",
        data:data
    };
}

export function loadEvent(data) {
    return (dispatch, getState)  => {
        dispatch(load(data));
    };
}
