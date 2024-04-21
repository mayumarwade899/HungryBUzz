export const Footer = () => {
  return (
    <div className="flex justify-center gap-40 pt-10 h-96 w-full bg-slate-900 text-white cursor-pointer">
      <d className="mb-3">
        <h2 className="mb-3 text-lg font-semibold">Company</h2>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">About</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Careers</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Team</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">BuzzOne</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Hungry Instamart</ul>
      </d>

      <div className="footer-headline">
        <h2 className="mb-3 text-lg font-semibold">Contact us</h2>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Help & Support</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Partner with us</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Ride with us</ul>

        <div className="mt-12">
          <div className="footer-headline">
            <h2 className="mb-3 text-lg font-semibold">Legal</h2>
            <ul className="mb-4 font-semibold text-gray-400 hover:underline">Terms & Conditions</ul>
            <ul className="mb-4 font-semibold text-gray-400 hover:underline">Cookie Policy</ul>
            <ul className="mb-4 font-semibold text-gray-400 hover:underline">Privacy Policy</ul>
          </div>
        </div>
      </div>

      <div className="footer-headline">
        <h2 className="mb-3 text-lg font-semibold">We deliver to:</h2>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Mumbai</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Pune</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Bangalore</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Hyderabad</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">Delhi</ul>
        <ul className="mb-4 font-semibold text-gray-400 hover:underline">586 cities{">"}</ul>
      </div>
    </div>
  );
};

