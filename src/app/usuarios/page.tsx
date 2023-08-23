"use client"
import NavBar from "@/components/NavBar";
import ButtonAdd from "@/components/buttons/ButtonAdd";
import ButtonDelete from "@/components/buttons/ButtonDelete";
import ModalUser from "@/components/user/ModalUser";


declare const window: any;

export default function Usuarios() {
  return (
    <>
    <NavBar />
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data Nascimento</th>
            <th><ButtonAdd modalName={window.modalUser} /></th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <th>1</th>
            <td>Amanda</td>
            <td>amanda@gmail.com</td>
            <td>08/10/1997</td>
            <th className="flex flex-row w-auto justify-end">
              <ModalUser />
            </th>
          </tr>

          <tr>
            <th>2</th>
            <td>Henrique</td>
            <td><h1></h1>enrique@gmail.com</td>
            <td>05/06/2003</td>
            <th className="flex flex-row w-auto justify-end">
              <button className="btn btn-ghost btn-xs" onClick={()=>window.modalUser.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <ButtonDelete />
            </th>
          </tr>

          <tr>
            <th>3</th>
            <td>Vinicius</td>
            <td>vinicius@gmail.com</td>
            <td>28/04/2002</td>
            <th className="flex flex-row w-auto justify-end">
              <button className="btn btn-ghost btn-xs" onClick={()=>window.modalUser.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <ButtonDelete />
            </th>
          </tr>

          <tr>
            <th>4</th>
            <td>Douglas</td>
            <td>fouglas@gmail.com</td>
            <td>03/03/1984</td>
            <th className="flex flex-row w-auto justify-end">
              <button className="btn btn-ghost btn-xs" onClick={()=>window.modalUser.showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </button>
              <ButtonDelete />
            </th>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  );
}