export const JwtHandler = {
    JWT_KEY: "JWT",

    onChangeEvent: new CustomEvent("onJwtChange"),

    onChange: () => {
        window.dispatchEvent(JwtHandler.onChangeEvent)
    },

    setJwt: value => {
        localStorage.setItem(JwtHandler.JWT_KEY, value)
    },

    getJwt: () => localStorage.getItem(JwtHandler.JWT_KEY),

    isJwtValid: () => Boolean(JwtHandler.getJwt()),

    clearJwt: () => {
        localStorage.removeItem(JwtHandler.JWT_KEY)
        JwtHandler.onChange()
    }
}