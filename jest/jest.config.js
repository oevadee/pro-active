module.exports = {
    globals: {
        __PATH_PREFIX__: "",
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "./__mocks__/file-mock.js",
    },
    setupFiles: ["./loadershim.js"],
    testEnvironment: "jsdom",
    testMatch: ["./src/**/__tests__/**/?(*.)+(test).[jt]s?(x)"],
    testPathIgnorePatterns: ["node_modules", "\\.cache", "..*/public"],
    testURL: "http://localhost:8000",
    transform: {
        "^.+\\.[jt]sx?$": "./jest-preprocess.js",
    },
    transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
};
