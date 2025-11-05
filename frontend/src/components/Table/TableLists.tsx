import { useEffect, useState } from "react"

import {Contact} from "../../types/contactTypes"
import DefaultTable from "./defaultTable";
import { useContactStore } from "../../store/contactStore"

function TableList() {
  const { contacts, loading, fetchContacts, markVerified, deleteContact, updateContact } = useContactStore();
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState({} as { firstName: string; lastName: string; id: number });
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    additionalInfo: '', 
    verified: false,
  });

  useEffect(() => {
    if(contacts?.length === 0){
      fetchContacts();
    }
  }, [fetchContacts]);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const EditIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 13.66V19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.34" />
      <path d="m17 1 4 4-10 10H7v-4z" />
    </svg>
  );

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
    setEditForm({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      additionalInfo: contact.additionalInfo || '',
      verified: contact.verified || false,
    });
    setToggleEditModal(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingContact) return;

    try {
      await updateContact(editingContact.id, editForm);
      
      setToggleEditModal(false);
      setEditingContact(null);
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  {loading && contacts?.length === 0 && <DefaultTable />}

  return (
    <div>
    <h2>Contacts ({contacts && contacts?.length})</h2>

    {/* Delete Confirmation Modal */}
    {toggleModal && (
      <div
        id="deleteConfirmationModal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div className="w-full max-w-2xl mx-4 bg-white rounded-lg p-8 relative border-2">
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

            <div className="flex justify-end">
              <button 
                onClick={() => setToggleModal(false)} 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
              ✕
              </button>
              <button onClick={() => setToggleModal(false)} className="btn mx-1">Cancel</button>
              <button 
                onClick={() => deleteContact(selectedContact?.id).then(() => setToggleModal(false))}
                className="btn mx-1 text-red-600 hover:text-white hover:bg-red-500">Delete</button>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* Edit Contact Modal */}
    {toggleEditModal && (
      <div
        id="editContactModal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div className="w-full max-w-2xl mx-4 bg-white rounded-lg p-8 relative border-2">
          <h3 className="font-bold text-2xl mb-4">Edit Contact</h3>

          <form onSubmit={handleEditSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Additional Info */}
              <div className="form-control col-span-2">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  value={editForm.additionalInfo}
                  onChange={(e) => setEditForm({ ...editForm, additionalInfo: e.target.value })}
                  className="textarea textarea-bordered h-24 w-full"
                />
              </div>
            </div>

            <div className="modal-action mt-4 flex justify-end gap-2">
              <button
                type="button"
                className="btn"
                onClick={() => {
                  setToggleEditModal(false);
                  setEditingContact(null);
                }}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>

          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            onClick={() => {
              setToggleEditModal(false);
              setEditingContact(null);
            }}
          >
            ✕
          </button>
        </div>
      </div>
    )}
    
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
            <tr key={contact.id}>
              <th>
                <label>
                  <input 
                    type="checkbox" 
                    className="checkbox" 
                    checked={contact.verified}
                    disabled={contact.verified}
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
                        <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></polyline></g></svg>
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
              <td className="flex-col gap-2 justify-between items-center text-sm text-gray-500">
                <button
                    onClick={() => handleEditClick(contact)}
                    className="flex my-1 items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <EditIcon />
                    Edit
                  </button>
                  {/* <span className="text-gray-300">|</span> */}
                  <button 
                    onClick={()=> {
                      setSelectedContact({ firstName: contact?.firstName, lastName: contact?.lastName, id: contact?.id });
                      setToggleModal(true)
                    }}
                    className="my-1 border border-gray-300 rounded-md px-2 py-1 text-sm text-red-600 hover:text-red-800 transition-colors cursor-pointer">
                    Delete
                  </button>
              </td>
              </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-300 w-full">
          <tr>
            <th className="">Total:</th>
            <th>{contacts?.length || 0}</th>
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
    </div>
  )
}

export default TableList