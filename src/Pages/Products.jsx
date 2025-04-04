import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false)
                console.log(filter);

            }

            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton  height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton  height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton  height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton  height={350}/>
            </div>
            </>
        )

    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((pro)=>pro.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 my-3">
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men 's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women 's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4 border-0 shadow" key={product.id}>
                                        <img src={product.image} height="250px" />
                                        <div className="card-body">
                                            <h5 className='mb-0'>{product.title.substring(0,12)} ....</h5>
                                            <p className='lead fw-bold'>${product.price}</p>
                                            <NavLink to={`/products/${product.id}`}>
                                                <button className='btn btn-outline-dark'>Buy Now</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
