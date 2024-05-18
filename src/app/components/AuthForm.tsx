/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function AuthForm() {
  return (
    <div className="flex flex-row gap-8">
      <Image
        src="/images/auth/Screenshot_1.png"
        alt=""
        width={400}
        height={500}
      />
      <div className="flex flex-col gap-3">
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
              placeholder="Num. téléphone, nom d'utilisateur ou e-mail"
              className="border p-2 border-gray-300 text-xs text-black w-[268px] h-[38px] rounded"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="border p-2 border-gray-300 text-xs text-black w-[268px] h-[38px] rounded"
            />
            <button className="h-[32px] w-[268px] bg-[#429aff] rounded-lg text-white mt-2">
              Se connecter
            </button>
          </div>
          <div className="flex flex-row items-center gap-4 mt-5">
            <span className="flex h-px w-24 bg-gray-300"></span>
            <p className="text-sm">OU</p>
            <span className="flex h-px w-24 bg-gray-300"></span>
          </div>
          <div className="flex flex-col items-center gap-5 mt-5">
            <a href="" className="flex flex-row gap-2">
              <Image
                src="/images/auth/facebook.png"
                alt="facebook icon"
                width={20}
                height={20}
              />
              <span className="text-sm text-[#1D3C78] font-medium">
                Se connecter avec Facebook
              </span>
            </a>
            <a href="" className="text-[11px] text-[#1D3C78]">
              Mot de passe oublié ?
            </a>
            <span className="text-[11px] text-center mx-4">
              Vous pouvez également{" "}
              <a href="" className="text-[#1D3C78] hover:underline">
                signaler le contenu que vous pensez illégal
              </a>{" "}
              dans votre pays sans vous connecter.
            </span>
          </div>
        </form>
        <div className="w-[350px] h-[63px] border border-gray-300 flex items-center justify-center">
          <span className="text-sm">
            Vous n'avez pas de compte ?{" "}
            <a href="" className="text-[#429aff] font-bold">
              Inscrivez-vous
            </a>
          </span>
        </div>
        <div className="flex justify-center">
          <p className="text-sm">Télécharger l'application</p>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <Image
            src="/images/auth/googleplay.png"
            alt="App Store"
            width={140}
            height={40}
          />
          <Image
            src="/images/auth/microsoftstore.png"
            alt="Google Play"
            width={140}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
