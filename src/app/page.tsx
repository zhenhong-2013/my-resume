'use client';

import React from 'react';
import { Divider, Col, Row, List, ConfigProvider } from 'antd';

const basicData = [
  '姓   名：石XX',
  '性   别：男',
  '出生日期：2013-01-29',
  '学   校：上海西南模范中学',
];

const certData = [
  '国象：XXX',
  '桥牌：XXX',
  '奥数：XXX',
  '空手道：XXX',
];

const familyData = [
  '父亲 工程师 13*********',
  '母亲 财务   13*********',
];

const hobbyData = [
  '排箫',
  '游戏',
];

const App: React.FC = () => (

  <ConfigProvider
  theme={{
    token: {
      /* 这里是你的全局 token */
      colorBorder: "#F9F900",
      colorSplit: "rgba(255, 165, 0, 0.2)",
    },
  }}>

  <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>

    <Col offset={4} span={16} className="gutter-row">

      <Divider orientation="left" plain>
        <h3>基本信息</h3>
      </Divider>
      <List    
        bordered
        dataSource={basicData}
        renderItem={(item) => (
          <List.Item>
              {item}
          </List.Item>
        )}
      />    
 


    </Col>

    <Col offset={4} span={16} className="gutter-row">
    <Divider orientation="left" plain>
    <h3>获奖证书</h3>
    </Divider>
    <List    
      bordered
      dataSource={certData}
      renderItem={(item) => (
        <List.Item>
             {item}
        </List.Item>
      )}
    />
    </Col>

    <Col offset={4} span={16} className="gutter-row">
    <Divider orientation="left" plain>
    <h3>家庭成员</h3>
    </Divider>
    <List    
      bordered
      dataSource={familyData}
      renderItem={(item) => (
        <List.Item>
             {item}
        </List.Item>
      )}
    />
    </Col>

    <Col offset={4} span={16} className="gutter-row">
    <Divider orientation="left" plain>
    <h3>兴趣爱好</h3>
    </Divider>
    <List    
      bordered
      dataSource={hobbyData}
      renderItem={(item) => (
        <List.Item>
             {item}
        </List.Item>
      )}
    />
    </Col>

  </Row>
  </ConfigProvider> 
);


export default App;
