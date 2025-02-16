use dominator::{body, html, replace_dom};
use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
fn wasm_main() {
    replace_dom(
        &body().parent_node().unwrap(),
        &body(),
        html!("body", {
            .text("Hello, world!")
        }),
    );
}
