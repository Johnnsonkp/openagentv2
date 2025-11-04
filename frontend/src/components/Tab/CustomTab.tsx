function CustomTab() {
  return (
    <div className="tabs tabs-lift w-[85%] mx-auto z-10 my-7 mt-10">

      <label className="tab px-8 text-md h-13 bg-[rgba(38,165,97,1)] text-white border-[rgba(38,165,97,1)] rounded-t-2xl hover:bg-[rgba(38,165,97,1)]">
        <input type="radio" name="my_tabs_4" />
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

      <label className="tab flex align-middle mx-1 px-8 text-md h-13 bg-[#DDD8E5] rounded-t-2xl hover:bg-[rgba(38,165,97,1)] hover:text-white">
        <input type="radio" name="my_tabs_4" defaultChecked />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="25" height="18" className="ga-event group-hover:ut-fill-grey-01 group-hover:ut-opacity-100 ut-fill-purple-09 ut-opacity-60" data-category="Hero" data-subcategory="Hero Search Tabs" data-eventvaluetype="Buying" data-eventvalue="Buying"><path fill-rule="evenodd" d="M17.448 13.5c-.083-.25-.25-.5-.333-.667-.167-.25-.334-.416-.5-.583a3.6 3.6 0 0 0-.584-.5c-.25-.167-.5-.333-.75-.417s-.5-.25-.833-.333-.667-.25-.917-.333-.583-.167-1-.334a7.2 7.2 0 0 1-1.916-.833c-.417-.25-.584-.583-.584-1q0-.625.5-1c.334-.25.834-.333 1.417-.333 1.083 0 2.25.416 3.333 1.166.167.084.334.084.5-.083l1.417-1.75c.083-.167.083-.417-.083-.5-.5-.333-1-.667-1.584-.917-.75-.333-1.416-.583-2.166-.75v-2A.36.36 0 0 0 13.03 2h-1.75a.36.36 0 0 0-.333.333V4.25c-1.333.167-2.417.667-3.167 1.5S6.615 7.583 6.615 8.833c0 .334 0 .584.083.834s.083.5.167.75c.083.25.166.416.333.583.083.167.25.333.417.5s.333.333.5.417c.166.166.333.25.583.416.25.084.417.25.667.334.166.083.416.166.75.333l.75.25.75.25c.333.083.666.167.833.25.25.083.5.167.667.25.166.083.416.167.5.333.166.084.25.25.333.334.083.083.167.25.167.416.083.167.083.334.083.5 0 .417-.167.834-.5 1.084s-.833.416-1.417.416c-.666 0-1.416-.166-2.166-.5-.667-.25-1.25-.666-1.75-1.083-.167-.167-.417-.083-.5 0l-1.5 1.75a.53.53 0 0 0 0 .5c1.25 1.167 2.75 1.917 4.5 2.167v1.75c0 .166.166.333.333.333h1.75a.36.36 0 0 0 .333-.333v-1.75q2-.25 3.25-1.5c.75-.834 1.167-1.834 1.167-3.084 0-.333 0-.666-.083-.916 0-.417-.084-.667-.167-.917"></path></svg>
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

      <label className="tab flex align-middle px-8 text-md h-13 bg-[#DDD8E5] rounded-t-2xl hover:bg-[rgba(38,165,97,1)] hover:text-white">
        <input type="radio" name="my_tabs_4" />
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 me-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 16" width="18" height="18" className="size-5 me-2" stroke="currentColor" data-category="Hero" data-subcategory="Hero Search Tabs" data-eventvaluetype="Valuation" data-eventvalue="Valuation"><path d="M12 .78h3v14.85h-3zM0 10.062h3v5.568H0zM6 5.42h3v10.21H6z"></path></svg>
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