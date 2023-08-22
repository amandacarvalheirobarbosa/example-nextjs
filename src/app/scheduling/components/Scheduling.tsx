export default function Scheduling() {

  return (
    <>
    <div className="flex flex-col h-full">
      <div className="flex flex-row form-control justify-end">
        <label className="label cursor-pointer p-2">
          <input type="radio" name="radio-5" className="radio radio-success" checked />
          <span className="label-text px-2">Horizontal</span> 
        </label>
        <label className="label cursor-pointer p-2">
          <input type="radio" name="radio-5" className="radio radio-success" />
          <span className="label-text px-2">Vertical</span> 
        </label>
      </div>
    </div>   
    </>
  );
}