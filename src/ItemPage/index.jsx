import React, { useContext, useEffect, useState } from 'react';
import { DatePicker, Select, Form, Button, Space, Input, Modal } from 'antd';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import { hospitals } from '../LoadData/Config/index.jsx';
import AuthContext from '../AuthContext';
import moment from 'moment';

const ItemPage = () => {
  const [form] = Form.useForm();
  const authData = useContext(AuthContext); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const user = await Auth.currentAuthenticatedUser();
        const userId = user.attributes.sub;
        const dataToSend = {
          userId,
        };
        const headerAuth = { headers: { Authorization: authData.token } };
        const response = await axios.post('https://unbq00cy25.execute-api.ap-northeast-2.amazonaws.com/staging/users', { action: 'hospital_reserve_status', ...dataToSend }, headerAuth);
        console.log(response);
        const formattedData = response.data.entries.map(entry => ({
          ...entry,
          date: moment(entry.date, 'YYYY-MM-DD'),
        }));
        setData(formattedData);
        form.setFieldsValue({ entries: formattedData });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (authData.token) {
      fetchData();
    }
  }, [authData.token]);


  const handleSubmit = async (values) => {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;

    const entriesWithPriority = values.entries.map((entry, index) => ({
      ...entry,
      date: entry.date.format('YYYY-MM-DD'),
      priority: index + 1,
    }));

    const dataToSend = {
      userId,
      entries: entriesWithPriority,
    };

    // POST request to the API endpoint
    
    const headerAuth = { headers: { Authorization: authData.token } };
    axios.post('https://unbq00cy25.execute-api.ap-northeast-2.amazonaws.com/staging/users', { action: 'hospital_reserve', ...dataToSend },headerAuth)
    .then(response => {
      console.log(response.data);
      const formattedData = {
        ...response.data,
        entries: response.data.entries.map(entry => ({
          ...entry,
          date: moment(entry.date, 'YYYY-MM-DD'),  // 文字列形式の日付をmomentオブジェクトに変換
        })),
      };
      form.setFieldsValue(formattedData); // フォームの初期値を設定
    })
    .catch(error => {
      console.error(error);
    });
  };

  const handleHospitalChange = (value, field, setFieldsValue) => {
    const selectedHospital = hospitals.find(hospital => hospital.name === value);
    setFieldsValue({
      entries: form.getFieldValue("entries").map((entry, i) => i === field ? { ...entry, location: selectedHospital.address } : entry)
    });
  };

  return (
    <div style={{paddingTop:"10px"}}>

      <Modal
        title="Loading"
        visible={loading}
        footer={null}
        closable={false}
      >
        <p>Please wait...</p>
      </Modal>
    <Form form={form} onFinish={handleSubmit}>
      <Form.List name="entries">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field, index) => (
              <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <label>{`第${index + 1}候補`}</label>
                <Form.Item
                  {...field}
                  name={[field.name, 'date']}
                  key={[field.key, 'date']}
                  rules={[{ required: true, message: '日付を入力してください' }]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'hospital']}
                  key={[field.key, 'hospital']}
                  rules={[{ required: true, message: '病院名を選択してください' }]}
                >
                  <Select 
                    placeholder="病院名を選択してください"
                    onChange={(value) => handleHospitalChange(value, field.name, form.setFieldsValue)}
                  >
                    {hospitals.map((hospital, index) => (
                      <Select.Option key={hospital.name} value={hospital.name}>
                        {hospital.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'location']}
                  key={[field.key, 'location']}
                  rules={[{ required: true, message: '住所を入力してください' }]}
                >
                  <Input placeholder="住所が自動的に設定されます" />
                </Form.Item>
                <Button onClick={() => remove(field.name)}>削除</Button>
              </Space>
            ))}

            {fields.length < 5 && (
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  候補を追加
                </Button>
              </Form.Item>
            )}
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          登録
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default ItemPage;
