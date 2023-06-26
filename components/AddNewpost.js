function AddNewpost() {
  return (
    <div className="bg-white lg:h-20 text-base flex items-center justify-evenly h-64 lg:flex-row flex-col">
        <p className="text-3xl font-semibold ">Add new post</p>

        <div>
          <img src="/images/Plus.svg" className="inline "></img>
          <p className="inline pl-2">Add Content</p>
        </div>

        <div>
          <img src="/images/Setting-B.svg" className="inline"></img>
          <p className="inline pl-2 mr-0 lg:mr-36 ">Settings</p>
        </div>


      <div className="border flex w-64 h-10">
        <input className="border-none focus:outline-none placeholder-black pl-3" placeholder="Search content.."></input>
        <img className="cursor-pointer w-6 h-6 mt-1 ml-6" src="/images/Search.svg"></img>
      </div>
      

    </div>
  )
}

export default AddNewpost;
