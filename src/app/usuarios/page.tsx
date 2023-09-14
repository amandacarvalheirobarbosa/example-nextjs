"use client"
import NavBar from "@/components/NavBar";
import ButtonAdd from "@/components/buttons/ButtonAdd";
import ButtonDelete from "@/components/buttons/ButtonDelete";
import ButtonEdit from "@/components/buttons/ButtonEdit";
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
            <td>henrique@gmail.com</td>
            <td>05/07/2003</td>
            <th className="flex flex-row w-auto justify-end">
              <ButtonEdit modalName={window.modalUser}/>
              <ButtonDelete />
            </th>
          </tr>

          <tr>
            <th>3</th>
            <td>Vinicius</td>
            <td>vinicius@gmail.com</td>
            <td>28/04/2002</td>
            <th className="flex flex-row w-auto justify-end">
              <ButtonEdit modalName={window.modalUser}/>
              <ButtonDelete />
            </th>
          </tr>

          <tr>
            <th>4</th>
            <td>Douglas</td>
            <td>douglas@gmail.com</td>
            <td>03/03/1984</td>
            <th className="flex flex-row w-auto justify-end">
              <ButtonEdit modalName={window.modalUser}/>
              <ButtonDelete />
            </th>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  );
}
