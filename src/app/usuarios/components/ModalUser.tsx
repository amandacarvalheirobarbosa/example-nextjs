"use client"
declare const window: any;

export default function ModalUser() {
  return(
    <>
    <button className="btn btn-ghost btn-sm" onClick={()=>window.modalUser.showModal()}>Editar</button>
    <div className="flex flex-col">
      <dialog id="modalUser" className="modal">
        <form method="dialog" className="modal-box">
          <div className="flex flex-col py-3 px-2 w-full justify-center">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="py-3" style={{
                fontSize: '25px',
                fontWeight: 'bold',
              }}>Editar Usuário</h3>

            <label className="py-3" style={{
                fontSize: "18px",
              }}>Name *</label>
            <input type="text" className="input input-bordered input-success w-full max-w-md py-5" />
            
            <label className="py-3" style={{
                fontSize: "18px",
              }}>Job *</label>
            <input type="text" className="input input-bordered input-success w-full max-w-md py-5" />

            <label className="py-3" style={{
                fontSize: "18px",
              }}>Favorite Color *</label>
            <input type="text" className="input input-bordered input-success w-full max-w-md py-5" />

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