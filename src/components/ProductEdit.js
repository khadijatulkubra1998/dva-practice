import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Input } from 'antd';
import 'antd/dist/antd.css';
const ProductEdit = ({ onSubmited, products,}) => {
    const columns = [{ title: 'Name', dataIndex: 'name', },
    {
        title: 'Actions',
        render: (text, record) => {
            return (
                <div>
                    <Input placeholder="Basic usage" />
                    <Popconfirm title="Edit?" onConfirm={() => onSubmited(record.id)} >
                        <Button> edit </Button>
                    </Popconfirm>
                </div>

            );
        },
    }];

    return (
        <div>
            <Table dataSource={products} columns={columns} />
      
        </div>
    );
};
ProductEdit.propTypes = {
    onSubmited: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}
export default ProductEdit; 