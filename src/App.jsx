import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { Menu,Layout } from 'antd';
import BlankPage from "./BlankPage";
import LoginPage from "./LoginPage";
import UserEdit from "./UserEdit";
import MyPage from "./MyPage";
import TodoPage from "./TodoPage";
import MainLayout from "./Layout";
import FileUploader from "./FileUploader";
import ItemPage from "./ItemPage";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/blank" element={<BlankPage />} />
          <Route path="/user_edit" element={<UserEdit />} />
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/file_uploader" element={<FileUploader />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
