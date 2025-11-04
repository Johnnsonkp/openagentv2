import BannerSection from "../../components/ui/BannerSection"
import TableList from "../../components/Table/TableLists"

function Contacts() {
  return (
    <div className="h-full">
      <BannerSection title={'Contacts'} />
      <main className="h-full min-h-[50vh] p-15 max-w-[1450px] mx-auto pb-30">
        <TableList />
      </main>
    </div>
  )
}

export default Contacts