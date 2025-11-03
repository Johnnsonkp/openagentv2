function CustomTab() {
  return (
    <div className="tabs tabs-lift w-[85%] mx-auto z-10 my-7 mt-10">

      <label className="tab px-8 text-md h-13 bg-[rgba(38,165,97,1)] text-white border-[rgba(38,165,97,1)] rounded-t-2xl hover:bg-[rgba(38,165,97,1)]">
        <input type="radio" name="my_tabs_4" />
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18" strokeWidth="1.5" width="20" height="20" stroke="currentColor" className="size-5 me-2" data-category="Hero" data-subcategory="Hero Search Tabs" data-eventvaluetype="Selling" data-eventvalue="Selling"><path d="m10 3.485 5 4.523v7.852h-2V9.828H7v6.032H5V8.008zM10 .78 0 9.828h3v8.042h6V11.84h2v6.031h6V9.828h3z"></path></svg>

        Selling
      </label>

      <div className="tab-content bg-base-100 border-base-300">
        <form action="/search" className="w-full px-0">
          <div className="relative">
            <input type="text" name="q" className="w-full border border-white h-15 shadow p-4 rounded-xl" placeholder="search" />

            <button type="submit" className="bg-[rgba(38,165,97,1)] w-11 h-[70%] absolute top-2.5 right-3 rounded-md">
              <svg className="text-white h-5 w-5 fill-current mx-auto my-auto"
                xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                </path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <label className="tab mx-1 px-8 text-md h-13 bg-[#DDD8E5] rounded-t-2xl hover:bg-[rgba(38,165,97,1)] hover:text-white">
        <input type="radio" name="my_tabs_4" defaultChecked />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>
        Buying
      </label>
      
      <div className="tab-content bg-base-100 border-base-300">
        <form action="/search" className="w-full px-0">
          <div className="relative">
              <input type="text" name="q" className="w-full border border-white h-15 shadow p-4 rounded-xl" placeholder="search" />

              <button type="submit" className="bg-[rgba(38,165,97,1)] w-11 h-[70%] absolute top-2.5 right-3 rounded-md">
                <svg className="text-white h-5 w-5 fill-current mx-auto my-auto"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                  x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                  <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                  </path>
                </svg>
              </button>
          </div>
        </form>
      </div>

      <label className="tab px-8 text-md h-13 bg-[#DDD8E5] rounded-t-2xl hover:bg-[rgba(38,165,97,1)] hover:text-white">
        <input type="radio" name="my_tabs_4" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        Evaluation
      </label>
      
      <div className="tab-content bg-base-100 border-base-300">
        <form action="/search" className="w-full px-0">
          <div className="relative">
              <input type="text" name="q" className="w-full border border-white h-15 shadow p-4 rounded-xl" placeholder="search" />

              <button type="submit" className="bg-[rgba(38,165,97,1)] w-11 h-[70%] absolute top-2.5 right-3 rounded-md">
                <svg className="text-white h-5 w-5 fill-current mx-auto my-auto"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
                  x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                  <path
                      d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                  </path>
                </svg>
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomTab