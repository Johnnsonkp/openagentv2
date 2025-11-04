import TableList from "../../components/Table/TableLists"
import BannerSection from "../../components/ui/BannerSection"

function Contacts() {
  return (
    <div className="h-full">
      <BannerSection title={'Contacts'} />
      <main className="h-full min-h-[40vh] p-15">
        <TableList />
      </main>
    </div>
  )
}

export default Contacts