"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ChangeTheme from "./ChangeTheme";
import ModalPassword from "./ModalPassword";
/* import ModalPassword from "./ModalPassword"; */

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/usuarios">Usuários</Link></li>
            <li>
              <details>
                <summary>Outros</summary>
                <ul>
                  <li><Link href="/scheduling">Agendamento</Link></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          <Image src="/images/logo.png" width={60} height={40} alt="logo" />
        </a>
      </div>
      <div className="navbar-end">
        <ChangeTheme />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="w-auto rounded-full">Nome</div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
            <li>
              <ModalPassword />
            </li>
            <li><a onClick={() => signOut()} className="justify-end">Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
