import React from 'react'
import {Table} from "antd"
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../utils/api'

const Cart = () => {
    const [cart, setCart] = useState(null)
    useEffect(()=>{
        const fetchCart = async () => {
            const res = await api.get("http://localhost:8080/cart/")
            setCart(res.data);
        }
        fetchCart();
    }, []);
    return (
    <>
        <h1>Giỏ hàng của bạn</h1>
        <div className="table">
            <Table
                columns={[
                    {
                        title: 'Sản phẩm',
                        render: (record)=>{
                            return <>
                            <img src={record.product?.image} alt={record.product?.name} />
                            <p>{record.product?.name}</p>
                            </>
                        }
                    },{
                        title: 'Giá',
                        render: (record)=>{
                            return <p>{record.product?.price}</p>
                        }
                    },{
                        title: 'Số lượng',
                        render: (record)=>{
                            return <p>{record.quantity}</p>
                        }
                    },{
                        title: 'variant',
                        render: (record)=>{
                            return <>
                            <p>{record.variant?.color}</p>
                            <p>{record.variant?.size}</p>
                            </>
                        }
                    }
                ]}
                dataSource={[cart]}
                ></Table>
        </div>
        <div className="showData"></div>
    </>
  )
}

export default Cart