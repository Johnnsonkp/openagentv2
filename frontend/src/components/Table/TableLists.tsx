import { useEffect, useState } from "react"

import {Contact} from "../../types/contactTypes"
import DefaultTable from "./defaultTable";
import { useContactStore } from "../../store/contactStore"

function TableList() {
  const { contacts, loading, fetchContacts, markVerified, deleteContact } = useContactStore();
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({} as { firstName: string; lastName: string; id: number });

  useEffect(() => {
    fetchContacts();

  }, [fetchContacts]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // const EditIcon: React.FC = () => (
  //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  //     <path d="M19 13.66V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.34" />
  //     <path d="m17 1 4 4-10 10H7v-4z" />
  //   </svg>
  // );

  const DeleteConfirmationModal = () => (
      <dialog id="my_modal_1" className="modal" open={toggleModal}>
        <div className="modal-box">
          <p className="py-4 text-xl">
            Are you sure you want to delete this contact? This action cannot be undone.
          </p>
          <div className="modal-action flex-col">

            <div className="border rounded-full w-fit px-3 py-1 flex items-center gap-3 mb-4">
              <div className="avatar">
                <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
                  <span className="text-2xl">{selectedContact?.firstName?.charAt(0)}</span>
                </div>
              </div>
              {selectedContact?.firstName} {selectedContact?.lastName}
            </div>

            <form method="dialog" className="flex justify-end">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
              </button>
              <button className="btn mx-1">Cancel</button>
              <button 
                onClick={() => deleteContact(selectedContact?.id).then(() => setToggleModal(false))}
                className="btn mx-1 text-red-600 hover:text-white hover:bg-red-500">Delete</button>
            </form>
          </div>
        </div>
      </dialog>
  )

  {loading && contacts?.length === 0 && <DefaultTable />}

  return (
    <>
    <h2>Contacts ({contacts && contacts?.length})</h2>

    <DeleteConfirmationModal />
    
    <div className="overflow-x-auto border border-gray-300 rounded-md overflow-hidden">
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
          {!loading && contacts?.length > 0 && contacts?.map((contact: Contact, index: number) => (
            <>
            <tr key={index}>
              <th>
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    checked={contact.verified}
                    onChange={() => markVerified(contact.id)}
                  />
                </label>
              </th>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center w-45 gap-3">
                  <div className="avatar">
                    <div className="flex items-center justify-center bg-neutral text-neutral-content h-10 w-10 rounded-full">
                      <span className="text-2xl">{contact.firstName.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className="font-bold mb-1">{contact.firstName} {contact.lastName}</div>
                    {contact.verified?
                      <div className="badge badge-success font-bold rounded-full gap-1">
                        <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></polyline></g></svg>
                        Verified
                      </div> : 
                      <div className="opacity-60 badge badge-outline badge-ghost rounded-full">Unverified</div>}
                  </div>
                </div>
              </td>
              <td>{contact.createdAt && formatDate(contact.createdAt)}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <th className="w-52">
                <textarea 
                  value={contact.additionalInfo}
                  className="textarea bg-transparent w-52"
                  readOnly
                >
                </textarea>
              </th>
              <td className="flex gap-2 items-center text-sm text-gray-500">
                {/* <button
                    className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <EditIcon />
                    Edit
                  </button>
                  <span className="text-gray-300">|</span> */}
                  <button 
                    onClick={()=> {
                      setSelectedContact({ firstName: contact?.firstName, lastName: contact?.lastName, id: contact?.id });
                      setToggleModal(true)
                    }}
                    className="border border-gray-300 rounded-md px-2 py-1 text-sm text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                    Delete
                  </button>
              </td>
              </tr>
            </>
          ))}
        </tbody>
        <tfoot className="bg-gray-300 w-full">
          <tr>
            <th className="">Total:</th>
            <th>{contacts.length}</th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Favorite Color</th>
            <th className="text-transparent">Color</th>
            <th className="text-transparent">Color</th>
            <th className="text-transparent">Color</th>
          </tr>
        </tfoot>
      </table>
    </div>
    </>
  )
}

export default TableList