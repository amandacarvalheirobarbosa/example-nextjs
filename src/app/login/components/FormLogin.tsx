import Image from "next/image";
import Link from "next/link";

export default function FormLogin() {
  return (
    <form method="POST">
      <div className="flex h-screen justify-center">
        <div className="flex flex-col space-y-4 justify-center">
          <div className="flex flex-row justify-center">
            <Image src="/images/logo.png" width={250} height={150} alt="logo" />
          </div>
          <h1 className="text-center" style={{
              fontSize: '30px', fontWeight: 'bold',
            }}>Login</h1>
          <input type="email" placeholder="E-mail" className="input input-bordered input-success w-full max-w-xs py-3" />
          <input type="password" placeholder="Senha" className="input input-bordered input-success w-full max-w-xs" />
          <div className="flex flex-row form-control">
            <label className="cursor-pointer label">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text px-2">Concordo com os a <Link href="/politica">Política de Privacidade</Link></span>
            </label>
          </div>
          <div className="flex flex-row max-w-sm space-y-5 justify-center">
            <button className="btn btn-wide mt-2" type="submit">Acessar</button>
          </div>
        </div>       
      </div>      
    </form>
  );
}