import { Button, message, Steps, Tabs, Table, Modal, Input } from 'antd';
import React, { useState } from 'react';
import { ColumnsType } from 'antd/es/table';
const { Step } = Steps;


export default function FormCall () {
    const { TextArea } = Input;
    const { TabPane } = Tabs;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            // dataIndex: '',
            // key: 'x',
            render: () => <a className='text-danger border-0!important' onClick={showModal}>Delete</a>
        },
    ];
    const data = [
        {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        },
        {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        },
        {
            key: 3,
            name: 'Not Expandable',
            age: 29,
            address: 'Jiangsu No. 1 Lake Park',
            description: 'This not expandable',
        },
        {
            key: 4,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        },
    ];




    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const forma = () => {
        return <form className='container' onSubmit={handleSubmit} >
            <div style={{ width: '100%', height: '42px', background: '#7FACEF', }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '30px', background: '#D9D9D9', marginBottom: '20px' }}>
                <Tabs defaultActiveKey="1" centered style={{ padding: '0 20px' }}>
                    <TabPane tab="Tab 1" key="1" >
                        <div className=' mt-3'>
                            <div style={{ display: 'grid', gridTemplateColumns: '100px 50px 100px', gridTemplateColumns: 'auto auto auto auto  ', columnGap: '10px', rowGap: '15px' }}>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>
                                <button className=' ' style={{ backgroundColor: 'white', padding: '7px 0', width: '80%', margin: '0 auto', fontSize: '18px' }}>7:00 - 7:15</button>

                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Tab 4" key="4">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Tab 5" key="5">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Tab 6" key="6">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="Tab 7" key="7">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>


        </form>


    }

    const formb = () => {
        return <form className='container' onSubmit={handleSubmit}  >
            <div style={{ width: '100%', height: '42px', background: '#7FACEF', }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '30px', background: '#D9D9D9', marginBottom: '20px', paddingTop: '20px' }}>
                <div className='row container'>

                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Họ:<span>*</span> </label>
                            <input className='form-control' placeholder='Họ' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                </div>
                <div className='row container'>

                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Họ:<span>*</span> </label>
                            <input className='form-control' placeholder='Họ' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                </div>
                <div className='row container'>

                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Họ:<span>*</span> </label>
                            <input className='form-control' placeholder='Họ' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div className='form-group'>
                            <label >Tên:</label>
                            <input className='form-control' placeholder='Tên' />
                        </div>
                    </div>
                </div>

            </div>
        </form>


    }
    const formc = () => {
        return <form className='container' onSubmit={handleSubmit}>
            <div style={{ width: '100%', height: '42px', background: '#7FACEF', }}></div>
            <div style={{ width: '100%', height: '100%', paddingBottom: '10px', background: '#D9D9D9', marginBottom: '20px', paddingTop: '20px' }}>
                <div className='container text-center' >
                    <p style={{ fontSize: '20px' }}>Tên Nhân Viên : <span>Hồ Khải</span></p>
                    <p style={{ fontSize: '20px' }}>Giá : <span>20 cua</span></p>
                    <p style={{ fontSize: '20px' }}>Ngày : <span>15/8/2000</span></p>
                </div>
                <hr />
                <div>
                    <div className='container text-center' >
                        <p style={{ fontSize: '20px' }}>Tên Nhân Viên : <span>Hồ Khải</span></p>
                        <p style={{ fontSize: '20px' }}>Giá : <span>20 cua</span></p>
                        <p style={{ fontSize: '20px' }}>Ngày : <span>15/8/2000</span></p>
                    </div>
                </div>

            </div>
        </form>


    }
    const formd = () => {
        return <form className='container' onSubmit={handleSubmit} >
            <div style={{ width: '100%', height: '42px', background: '#7FACEF', }}></div>
            <div style={{ width: '100%', height: '100%', background: '#D9D9D9', marginBottom: '20px' }}>

                <Table
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                        rowExpandable: record => record.name !== 'Not Expandable',
                    }}
                    dataSource={data}
                />
            </div>
        </form >


    }
    const steps = [
        {
            title: 'First',
            content: forma(),
        },
        {
            title: 'Second',
            content: formb(),
        },
        {
            title: 'Third',
            content: formc(),
        },
        {
            title: 'Last',
            content: formd(),
        },
    ];
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div className='container'>
            <Steps current={current} style={{ marginBottom: '30px' }}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action text-right" >
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
            <div>
                <Modal title="Lý Do" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <TextArea showCount maxLength={400} style={{ height: 120 }} />
                </Modal>
            </div>
        </div>
    )
}