function Products () {

    return(
        <div className="ml-6 mr-6 m-auto mt-8 flex justify-between items-center xl:flex-row flex-col ">

            
            <div className="bg-white w-56 h-24 box-border rounded-md">
                <img src="/images/Sales.svg" className="inline mt-6 ml-4"></img>
                <p className="inline ml-5">Total Sales</p>
                <p className="text-4xl font-semibold ml-16  relative bottom-5">$2,456</p>
            </div>
            
            
            <div className="bg-white w-56 h-24 mt-8 xl:mt-0 box-border rounded-md">
                <img src="/images/Expenses.svg" className="inline mt-6 ml-4"></img>
                <p className="inline ml-5">Total Expenses</p>
                <p className="text-4xl font-semibold ml-20 relative bottom-6">$3,326</p>
            </div>
            
            
            <div className="bg-white w-56 h-24 mt-8 xl:mt-0 box-border rounded-md">
                <img src="/images/Visitors.svg" className="inline mt-7 ml-4"></img>
                <p className="inline relative top-1 ml-5">Total Visitors</p>
                <p className="text-4xl font-semibold ml-20 mt-1 relative bottom-5">5,325</p>
            </div>
            
            
            <div className="bg-white w-56 h-24 mt-8 xl:mt-0 box-border rounded-md">
                <img src="/images/Orders.svg" className="inline mt-8 ml-4"></img>
                <p className="inline relative top-2 ml-5">Total Orders</p>
                <p className="text-4xl font-semibold ml-20 mt-2 relative bottom-5">1,326</p>
            </div>
        </div>
    )
}

export default Products
