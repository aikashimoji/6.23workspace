import React, { useState } from 'react';
import { DatePicker, Select, Form, Button, Space, Input } from 'antd';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';

const hospitals = [
  {
    name: 'すながわ内科クリニック',
    address: '〒904-2244 沖縄県うるま市江洲６００−５',
  },
  {
    name: '社会医療法人敬愛会ちばなクリニック',
    address: '〒904-2143 沖縄県沖縄市知花６丁目２５−１５',
  },
];

const ItemPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const user = await Auth.currentAuthenticatedUser();
    const userId = user.attributes.sub;

    // ここでAPIエンドポイントにPOSTリクエストを行います
    // axios.post('your-api-endpoint', { userId, ...values })

    console.log('Form Values:', values);
  };

  const handleHospitalChange = (value, field, setFieldsValue) => {
    const selectedHospital = hospitals.find(hospital => hospital.name === value);
    setFieldsValue({
      entries: form.getFieldValue("entries").map((entry, i) => i === field ? { ...entry, location: selectedHospital.address } : entry)
    });
  };

  return (
    <div style={{paddingTop:"10px"}}>
    <Form form={form} onFinish={handleSubmit}>
      <Form.List name="entries">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...field}
                  name={[field.name, 'date']}
                  fieldKey={[field.fieldKey, 'date']}
                  rules={[{ required: true, message: '日付を入力してください' }]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'hospital']}
                  fieldKey={[field.fieldKey, 'hospital']}
                  rules={[{ required: true, message: '病院名を選択してください' }]}
                >
                  <Select 
                    placeholder="病院名を選択してください"
                    onChange={(value) => handleHospitalChange(value, field.name, form.setFieldsValue)}
                  >
                    {hospitals.map((hospital, index) => (
                      <Select.Option key={index} value={hospital.name}>
                        {hospital.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  {...field}
                  name={[field.name, 'location']}
                  fieldKey={[field.fieldKey, 'location']}
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
