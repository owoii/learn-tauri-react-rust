// 防止在 Windows 系统上，在发布版本下出现额外的控制台窗口
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]



// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// 这里是一个官方的使用示例
#[tauri::command]
fn greet(name: &str) -> String {
    return format!("你好, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_file_dir(dirname: &str)->String{
    return format!("或许是被调用了,算是新的开始吧,这是你想看的目录名:{}",dirname)
}


fn main() {
    tauri::Builder::default()
        // 在这填入要被触发的方法名,数组内(大概这样子做就能被调用了)
        .invoke_handler(tauri::generate_handler![greet,get_file_dir])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
