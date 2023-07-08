import React, { useState, useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import axios from 'axios';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const FileUploader = () => {

  const [user, setUser] = useState();
  const [headers, setHeaders] = useState({
    Authorization: "",
  });
  const [idToken, setIdToken] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleChange = info => {
    let fileList = [...info.fileList];

    // Limit the list to last 1 item.
    fileList = fileList.slice(-1);

    // Read from response and show file link.
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(fileList);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      const token = user.signInUserSession.idToken.jwtToken;
      setIdToken(token);
      setHeaders({
        Authorization: `${token}`,
      });
    };

    fetchUser();
  }, []);

  const customRequest = async options => {
    const data = new FormData();
    data.append('file', options.file);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(options.file);
    fileReader.onload = async (event) => {
      try {
        if (!idToken || idToken == "") return;
        const headerAuth = { headers: { Authorization: idToken } };
        const res = await axios.post("https://gw9jr2td1f.execute-api.ap-northeast-1.amazonaws.com/staging/users", {
          action: 'excel_upload',
          file: event.target.result.split(',')[1], // here we are only taking the base64 part
        },
          headerAuth // Add this line. The headers object should contain the Authorization header
        );

        options.onSuccess(res.data, options.file);
        message.success('ファイルのアップロードが成功しました！');
      } catch (err) {
        message.error('アップロード中にエラーが発生しました');
      }
    };
  };

  const props = {
    name: 'file',
    multiple: false,
    fileList,
    action: "https://gw9jr2td1f.execute-api.ap-northeast-1.amazonaws.com/staging/users",
    onChange: handleChange,
    customRequest,
  };

  return (
    <Upload.Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <UploadOutlined />
      </p>
      <p className="ant-upload-text">ここをクリックするか、ファイルをドラッグ＆ドロップしてください</p>
    </Upload.Dragger>
  );
}

export default FileUploader;
