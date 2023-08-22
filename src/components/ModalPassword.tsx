declare const window: any;

export default function ModalPassword() {  
  return(
    <>
      <a className="justify-end" onClick={()=>window.modalPassword.showModal()}>Alterar Senha</a>
      <div className="flex flex-col">
        <dialog id="modalPassword" className="modal">
          <form method="dialog" className="modal-box">
            <div className="flex flex-col py-3 px-2 w-full justify-center">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="py-2" style={{
                fontSize: '25px',
                fontWeight: 'bold',
              }}>Alterar Senha</h3>
              
              <label className="py-2" style={{
                fontSize: "18px",
              }}>Senha atual *</label>
              <input type="password" className="input input-bordered input-success w-full max-w-md py-5" />
              
              <label className="py-2" style={{
                fontSize: "18px",
              }}>Nova senha *</label>
              <input type="password" className="input input-bordered input-success w-full max-w-md py-5" />
              
              <label className="py-2" style={{
                fontSize: "18px",
              }}>Repita nova senha *</label>
              <input type="password" className="input input-bordered input-success w-full max-w-md py-5" />
              
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