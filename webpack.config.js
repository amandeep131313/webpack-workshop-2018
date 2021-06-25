module.exports = ({mode}) => {
    console.log(env)
    return {
        mode,
        output: {
            filename: "bundle.js"
        }
    }
}