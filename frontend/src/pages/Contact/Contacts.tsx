import BannerSection from "../../components/ui/BannerSection"
import ContactList from "../../components/Table/ContactLists"

function Contacts() {
  return (
    <div className="h-full">
      <BannerSection title={'Contacts'} />
      <main className="h-full min-h-[50vh] p-15 max-w-[1450px] mx-auto pb-30">
        <ContactList />
      </main>
    </div>
  )
}

export default Contacts