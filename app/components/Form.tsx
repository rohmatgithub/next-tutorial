export const Form = () => {
    return (
        <form>
            <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">Email</span>
                <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                />
            </label>

            <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">Password</span>
                <input
                    type="password"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
                    minLength={8}
                    required
                />
            </label>

            <button
                type="submit"
                className="mt-3 w-full px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-md shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
                Submit
            </button>
        </form>
    )
}