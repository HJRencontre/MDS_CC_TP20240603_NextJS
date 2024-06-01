"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  return (
    <div className="flex flex-row h-screen w-full items-center justify-center">
      <div className="hidden md:flex items-center">
        <Image
          src="/images/auth/home-phones.png"
          alt=""
          width={465}
          height={635}
        />
      </div>
      <div className="flex flex-col">
        <form
          action=""
          className="border border-gray-300 bg-white h-[470px] w-[350px] flex items-center flex-col"
        >
          <Image
            src="/images/auth/instagramTitle.png"
            alt="Instagram"
            width={175}
            height={51}
            className="mt-10"
          />
          <div className="flex items-center flex-col gap-[6px] mt-8">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Num. téléphone, nom d'utilisateur ou e-mail"
              className="border p-2 border-gray-300 text-xs text-black w-[268px] h-[38px] rounded bg-[rgb(250,250,250)] outline-none focus:border-gray-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              className="border p-2 border-gray-300 text-xs text-black w-[268px] h-[38px] rounded bg-[rgb(250,250,250)] outline-none focus:border-gray-400"
            />
            <button
              className="h-[32px] w-[268px]  rounded-lg text-white mt-2 text-sm font-medium bg-[rgb(0,149,246)]"
              disabled={isDisabled}
            >
              Se connecter
            </button>
          </div>
          <div className="flex flex-row items-center gap-4 mt-5">
            <span className="flex h-px w-[107px] bg-gray-300"></span>
            <p className="text-xs font-semibold text-[rgb(115,115,115)]">OU</p>
            <span className="flex h-px w-[107px] bg-gray-300"></span>
          </div>
          <div className="flex flex-col items-center gap-5 mt-5">
            <a href="" className="flex flex-row gap-2">
              <Image
                src="/images/auth/facebook.png"
                alt="facebook icon"
                width={20}
                height={20}
              />
              <span className="text-sm text-[#385185] font-medium">
                Se connecter avec Facebook
              </span>
            </a>
            <a href="" className="text-xs text-[#1D3C78]">
              Mot de passe oublié ?
            </a>
            <span className="text-xs text-center mx-4 text-[rgb(115,115,115)]">
              Vous pouvez également{" "}
              <a href="" className="text-[#385898] hover:underline">
                signaler le contenu que vous pensez illégal
              </a>{" "}
              dans votre pays sans vous connecter.
            </span>
          </div>
        </form>
        <div className="w-[350px] h-[63px] border border-gray-300 flex items-center justify-center mt-3">
          <span className="text-sm font-normal">
            Vous n'avez pas de compte ?{" "}
            <a href="" className="text-[#429aff]">
              Inscrivez-vous
            </a>
          </span>
        </div>
        <div className="flex justify-center my-3">
          <p className="text-sm text-black">Télécharger l'application</p>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <Image
            src="/images/auth/googleplay.png"
            alt="App Store"
            width={134}
            height={40}
          />
          <Image
            src="/images/auth/microsoftstore.png"
            alt="Google Play"
            width={111}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
