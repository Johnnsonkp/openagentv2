export default function DefaultTable() {
  return (
    <table className="table mx-auto">
        <thead className="">
          <tr>
            <th>Is Verified?</th>
            <th>No.</th>
            <th>Full Name</th>
            <th>Date of Inquiry</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            <>
            <tr>
              <th>
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    checked={false}
                  />
                </label>
              </th>
              <td></td>
              <td>
                <div className="flex items-center w-45 gap-3">
                  <div className="avatar">
                    <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
                      <span className="text-2xl"></span>
                    </div>
                  </div>
                  <div className="w-fit">
                  </div>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <th className="w-52">
                <textarea 
                  value={""}
                  className="textarea bg-transparent w-52"
                  readOnly
                >
                </textarea>
              </th>
              <td className="flex gap-2 items-center text-sm text-gray-500">
                <button 
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                  Delete
                </button>
              </td>
              </tr>
            </>
        </tbody>
        <tfoot className="bg-gray-300 w-full">
          <tr>
            <th className="">Total:</th>
            <th></th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Color</th>
            <th className="text-transparent">Color</th>
            <th className="text-transparent">Color</th>
          </tr>
        </tfoot>
      </table>
    )
}
