import { getOptions, interpolateName, parseQuery } from "loader-utils";

export default function (content) {

    let options = Object.assign({
        regExp: null,
        name: '[name].[ext]',
        context: {},
    }, getOptions(this) || {})

    const name = interpolateName(this, options.name, { content, context: this.context, regExp: options.regExp })

    this.emitFile(name, eval(content)(options.context))

    const publicPath = "__webpack_public_path__ + " + JSON.stringify(name);

    return "module.exports = " + publicPath + ";";

}
