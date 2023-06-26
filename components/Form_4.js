function Form_4() {
  return (
    <div>
      <div class="ml-6 mr-6 m-auto mt-8 bg-white rounded-md">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-semibold">Form Title</h2>
          
          <div class="mt-4 mb-4">
            <label class="block text-gray-700 text-base mb-1 " for="field1">
              Label Title
            </label>
            <input
              class="appearance-none border border-gray-300 rounded w-full py-2 px-3 placeholder:text-black leading-tight focus:outline-none focus:shadow-outline"
              id="field1"
              type="text"
              placeholder="Placeholder content"
            />
          </div>

          <div class="w-full mb-6 ">
            <label class="block text-gray-700 text-base mb-1 " for="field3">
              Label Title
            </label>
            <select
              class="h-10 border border-gray-300 rounded w-full py-2 px-3 placeholder:text-black leading-tight focus:outline-none focus:shadow-outline"
              id="field3"
              placeholder="Placeholder content"
            >
              <option>Choose</option>
              <option>Choose 1</option>
              <option>Choose 2</option>
            </select>
          </div>

          <div class="flex flex-wrap -mx-3 ">
           
          </div>
          <div>
            <label class="block text-gray-700 text-base mb-1 " for="field7">
              Label Title
            </label>
            <input
              class="pb-40 h-48 border border-gray-300 rounded w-full py-2 px-3 placeholder-left placeholder:text-black"
              id="field7"
              type="text"
              placeholder="Placeholder content"
            />
          </div>
          <button className="w-full bg-blue-700 text-white pt-2 pb-2 mt-6 rounded-md">
            Button title
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form_4;
