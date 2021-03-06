import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Input } from 'antd';
import 'antd/dist/antd.css';
const ProductList = ({ onDelete, products,}) => {
    const columns = [{ title: 'Name', dataIndex: 'name', },
    {
        title: 'Actions',
        render: (text, record) => {
            return (
                <div>
                    < Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)} >
                        <Button> Delete </Button>
                    </ Popconfirm>
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
ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
};
export default ProductList; 