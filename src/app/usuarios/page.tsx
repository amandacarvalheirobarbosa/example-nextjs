"use client"
import NavBar from "@/components/NavBar";
import ModalUser from "./components/ModalUser";
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
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <th className="flex flex-row w-auto justify-end">
              <button className="btn btn-ghost btn-sm" onClick={()=>window.modalUser.showModal()}>Editar</button>
            </th>
          </tr>
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <th className="flex flex-row w-auto justify-end">
              <button className="btn btn-ghost btn-sm" onClick={()=>window.modalUser.showModal()}>Editar</button>
            </th>
          </tr>
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
            <th className="flex flex-row w-auto justify-end">
              <ModalUser />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}