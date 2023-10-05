// 使用 tauri api
import { invoke } from '@tauri-apps/api/tauri'
import React, { useState } from 'react'
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

export default function Event() {
  const buttonStyle =
    "no-underline text-dark-100 rounded-md px-8 py-1 border-dark-100 border-1 mt-3  hover:bg-dark-900 hover:text-light-900 transition-all duration-150";

  const [inputValue, setInputValue] = useState('')

  const clickHandler = async () => {
    const res = await invoke('get_file_dir', {
      dirname: inputValue
    })
    console.log(res)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // input 值变化时，更新 inputValue 状态变量
  }

  const sendMessage = async () => {
    let permissionGranted = await isPermissionGranted();
    console.log(permissionGranted)


    if (permissionGranted) {
      sendNotification('Tauri is awesome!');
      sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' });
    }
  }

  return (
    <>
      {/*      <input placeholder='输入你想被我看的目录' value={inputValue} onChange={handleInputChange}/>
      <button onClick={clickHandler}>让我看看你目录下有什么东西</button>*/}

      <button className={buttonStyle} onClick={sendMessage}>send Message</button>
    </>
  );
}
