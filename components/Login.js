import Link from "next/link";

function Login() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-neutral-100">
      <div className="w-5/6 h-5/6 flex justify-center">
        <img
          src="/images/Rectangle_Login.svg"
          className="hidden md:block"
        ></img>

        <div className="bg-white w-100 md:w-1/2">
          <h1 className="text-3xl ml-8 mt-8 font-semibold">Login</h1>
          <p className="ml-8 mb-12">Quis nostrud citation omnis ist</p>

          <label className="ml-8">E-Mail</label>
          <input
            placeholder="Placeholder content"
            className="ml-8 mb-8 mt-1 placeholder-black border border-gray-300 rounded py-2 px-3 placeholder:text-black w-5/6"
          />

          <label className="ml-8 mt-8">Password</label>
          <input
            placeholder="Placeholder content"
            className="ml-8 mb-6 mt-1 placeholder-black border border-gray-300 rounded py-2 px-3 placeholder:text-black w-5/6"
          />

          <p className="float-right mr-16 mb-4">Forget password?</p>

          <Link href="/">
            <button className="ml-8 mt-1 mb-6 border border-gray-300 rounded w-5/6 h-10 bg-blue-600 text-white ">
              Login
            </button>
          </Link>

          <div class="flex items-center justify-center">
            <div class="w-1/3 border-t border-neutral-300"></div>
            <span class="px-4 bg-white text-base text-neutral-400">or</span>
            <div class="w-1/3 border-t border-neutral-300"></div>
          </div>

          <button className="ml-8 mt-2 mb-6 border border-neutral-600 rounded w-5/6 h-10 text-neutral-600 ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
