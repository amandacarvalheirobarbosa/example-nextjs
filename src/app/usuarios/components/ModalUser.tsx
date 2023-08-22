"use client"
declare const window: any;

export default function ModalUser() {
  return(
    <>
    <button className="btn btn-ghost btn-xs" onClick={()=>window.modalUser.showModal()}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-xs">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </button>
    <div className="flex flex-col">
      <dialog id="modalUser" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex flex-col py-3 px-2 w-full justify-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="py-3" style={{
                fontSize: '25px',
                fontWeight: 'bold',
              }}>Usuário</h3>

            <label className="py-3" style={{
                fontSize: "18px",
              }}>Nome *</label>
            <input type="text" className="input input-bordered input-success w-full max-w-md py-5" />
            
            <label className="py-3" style={{
                fontSize: "18px",
              }}>Email *</label>
            <input type="email" className="input input-bordered input-success w-full max-w-md py-5" />

            <label className="py-3" style={{
                fontSize: "18px",
              }}>Data Nascimento *</label>
            <input type="date" className="input input-bordered input-success w-full max-w-md py-5" />

            <div className="flex flex-row justify-center pt-6">
              <button className="btn w-40" type="submit">Confirmar</button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
    </>
  );
}