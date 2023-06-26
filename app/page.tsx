import TopNavbar from "../components/TopNavbar.js"
import SideNavbar from "../components/SideNavbar.js"
import AddNewpost from "../components/AddNewpost.js"
import Products from "../components/Products.js"

import Form_1 from "../components/Form_1.js"
import Form_2 from "../components/Form_2.js"
import Form_3 from "../components/Form_3.js"
import Form_4 from "../components/Form_4.js"


export default function Home() {
  return (
    <div className="bg-neutral-100">
      <TopNavbar />
      <div className="flex">
        <SideNavbar />
        <div className="w-full">
          <AddNewpost />
          <Products />
          <Form_1/>
          <Form_2/>
          <div className="flex flex-col lg:flex-row">
            <Form_3/>
            <Form_4/>
          </div>


        </div>

      </div>


    </div>
  )
}
