/* import ButtonAdd from "../buttons/ButtonAdd";
import ButtonEdit from "../buttons/ButtonEdit"; */
import ButtonDelete from "../buttons/ButtonDelete";

const Button = () => {
  return (
    <div className="flex flex-row justify-end">
      {/* <ButtonEdit /> */}
      <ButtonDelete />
    </div>
  );
}

export default function Scheduling() {

  return (
    <>
    <div className="flex flex-col h-full">      
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Observação</th>
              <th>Data</th>
              <th>{/* <ButtonAdd /> */}</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th>1</th>
              <td>Amanda</td>
              <td>Aula</td>
              <td>29/08/2023</td>
              <td><Button /></td>
            </tr>

            <tr>
              <th>2</th>
              <td>Henrique</td>
              <td>Reunião</td>
              <td>29/09/2023</td>
              <td><Button /></td>
            </tr>

            <tr>
              <th>3</th>
              <td>Vinicius</td>
              <td>Palestra</td>
              <td>29/10/2023</td>
              <td><Button /></td>
            </tr>

            <tr>
              <th>4</th>
              <td>Douglas</td>
              <td>Reunião CRIAR</td>
              <td>04/09/2023</td>
              <td><Button /></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>   
    </>
  );
}
