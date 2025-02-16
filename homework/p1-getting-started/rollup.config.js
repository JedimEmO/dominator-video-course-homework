import rust from "@wasm-tool/rollup-plugin-rust";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";

const is_watch = !!process.env.ROLLUP_WATCH;

export default {
    input: {
        example: "Cargo.toml",
        scss: "html/style/example.scss"
    },
    output: {
        dir: "html/dist/js",
        format: "es",
        sourcemap: true,
    },
    plugins: [
        rust(),
        scss({
            fileName: "output.css",
            verbose: true
        }),
        is_watch && serve({
            contentBase: "html",
            open: true,
        }),

        is_watch && livereload("html"),

        !is_watch && terser(),
    ],
};