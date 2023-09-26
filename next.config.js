/** @type {import('next').NextConfig} */

module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.pdf$/i, 
            type: 'asset/resource',
            generator: {
                filename: `[name][ext]`,
                publicPath: '',
            }
        })
        return config
    },
}
