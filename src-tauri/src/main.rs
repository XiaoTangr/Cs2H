// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use cs2h_lib::fs;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            fs::list_files_and_directories,
            fs::read_text_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
