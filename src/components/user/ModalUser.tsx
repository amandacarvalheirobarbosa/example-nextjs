"use client"
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";

declare const window: any;

export default function ModalUser() {
  return(
    <>
    <ButtonEdit modalName={window.modalUser} />
    <ButtonDelete />
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