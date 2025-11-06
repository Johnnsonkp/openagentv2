function ListLoadingSkeleton({loading}: {loading?: boolean}) {
  return (
    <>
    <tr className={`skeleton w-full h-[70px] ${!loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <th className="w-full">
        <label></label>
      </th>
      <td className="w-full"></td>
      <td className="w-full">
        <div className="flex items-center w-45 gap-3">
          <div className="hidden avatar">
            <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
              <span className="text-2xl"></span>
            </div>
          </div>
          <div className="w-fit">
            <div className="font-bold mb-1"></div>
              <div className="opacity-60"></div>
          </div>
        </div>
      </td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <th className="w-full"></th>
      <td className="w-full flex-col gap-2 justify-between items-center text-sm text-gray-500"></td>
    </tr>

    <tr className="skeleton w-full h-[70px]">
      <th className="w-full">
        <label></label>
      </th>
      <td className="w-full"></td>
      <td className="w-full">
        <div className="flex items-center w-45 gap-3">
          <div className="hidden avatar">
            <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
              <span className="text-2xl"></span>
            </div>
          </div>
          <div className="w-fit">
            <div className="font-bold mb-1"></div>
              <div className="opacity-60"></div>
          </div>
        </div>
      </td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <th className="w-full"></th>
      <td className="w-full flex-col gap-2 justify-between items-center text-sm text-gray-500"></td>
    </tr>

    <tr className="skeleton w-full h-[70px]">
      <th className="w-full">
        <label></label>
      </th>
      <td className="w-full"></td>
      <td className="w-full">
        <div className="flex items-center w-45 gap-3">
          <div className="hidden avatar">
            <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
              <span className="text-2xl"></span>
            </div>
          </div>
          <div className="w-fit">
            <div className="font-bold mb-1"></div>
              <div className="opacity-60"></div>
          </div>
        </div>
      </td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <td className="w-full"></td>
      <th className="w-full"></th>
      <td className="w-full flex-col gap-2 justify-between items-center text-sm text-gray-500"></td>
    </tr>
    </>
  )
}

export default ListLoadingSkeleton