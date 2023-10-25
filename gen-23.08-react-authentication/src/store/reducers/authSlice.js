import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: {
        id: "",
        email: "",
        name: "",
    },
};

function getStoredAuthState() {
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("user");

    if (token) {
        return {
            token,
            user: JSON.parse(userString),
        };
    }

    return { ...initialState };
}

const authSlice = createSlice({
    name: "auth",
    initialState: getStoredAuthState(),
    reducers: {
        setToken(state, action) {
            const token = action.payload;
            state.token = token;
            localStorage.setItem("token", token);
        },
        setUser(state, action) {
            const { id, email, name } = action.payload;
            state.user.id = id;
            state.user.email = email;
            state.user.name = name;
            localStorage.setItem("user", JSON.stringify({ id, email, name }));
        },
        resetAuthData() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return { ...initialState };
        },
    },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;