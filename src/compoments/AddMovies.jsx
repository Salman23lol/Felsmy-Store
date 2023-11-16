import {React , useState} from 'react'

function AddMovies() {

  
  const [user, setuser] = useState(
    {
      Name:'',Year:'',Link:'',Description:'',
    }
  )

  let name , value
  const data = (e)=>{
    name = e.target.name
    value = e.target.value
    setuser({...user, [name]: value})
    console.log(user);
  }

  return (
    <>
    <div className="bg-gray-900 h-[602px] flex items-center justify-center">
      <div className="bg-gray-500 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-center">Add Movie</h2>
        <form>
          <div className="flex space-x-4">

          <div className="mb-2">
            <label htmlFor="text" className="block text-black font-medium">
              Name
            </label>
            <input value={user.Name} onchange={data}
              type="text"
              id="text"
              className="w-full border border-gray-300 p-1 rounded-md outline-none text-black"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="number" className="block text-black font-medium">
              Year
            </label>
            <input value={user.Year} onchange={data}
              type="number"
              id="year"
              className="w-full border border-gray-300 p-1   rounded-md outline-none text-black"
            />
          </div>
          </div>
          <div className="mb-2">
            <label htmlFor="link" className="block text-black font-medium">
              Link/Image
            </label>
            <input value={user.Link} onchange={data}
              type="link"
              id="password"
              className="w-full border border-gray-300 p-1   rounded-md outline-none text-black"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="text" className="block text-black font-medium">
              Description
            </label>
            <input value={user.Description} onchange={data}
              type="text"
              id="password"
              className="w-full border border-gray-300 py-8 px-1 rounded-md outline-none text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddMovies