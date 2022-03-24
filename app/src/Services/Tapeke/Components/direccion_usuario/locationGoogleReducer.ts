const initialState = {
    estado: "Not Found",
}

export default (state, action) => {
    if (!state) return initialState

    if (action.component == "locationGoogle") {
        switch (action.type) {
            case "geocode":
                geocode(state, action);
                break;
            case "autoComplete":
                autoComplete(state, action);
                break;

        }
        state.type = action.type
        state = { ...state };
    }
    return state;
}
const geocode = (state, action) => {
    console.log(action)
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data = action.data
    }
    // if (!data) return null;
    // return state.data;
    // if (action.estado != "exito") return;
    // state.data[action.data.key] = action.data;
}


const autoComplete = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.listaBusqueda = action.data
    }
}
