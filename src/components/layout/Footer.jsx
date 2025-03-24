const social = [
  {
    id: 1,
    jsx: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "https://veyselozturk.com.tr",
  },
  {
    id: 2,
    jsx: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184A4.92 4.92 0 0011.85 8.28a13.9 13.9 0 01-10.1-5.128 4.929 4.929 0 001.525 6.573A4.89 4.89 0 01.96 8.99v.06a4.923 4.923 0 003.95 4.827A4.925 4.925 0 013 14.126a4.919 4.919 0 004.6 3.42A9.863 9.863 0 010 19.54a14.002 14.002 0 007.557 2.21A13.9 13.9 0 0021.591 7.87v-.635a9.94 9.94 0 002.362-2.665z" />
      </svg>
    ),
    href: "https://veyselozturk.com.tr",
  },
  {
    id: 3,
    jsx: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.11 0-.613.493-1.109 1.1-1.109.608 0 1.1.496 1.1 1.109 0 .615-.492 1.11-1.1 1.11zM16 16h-2v-3.158c0-.674-.512-1.118-1.022-1.118-.539 0-1.028.32-1.028 1.138v3.138h-2V10h2v.723a2.53 2.53 0 011.84-.807c1.207 0 2.21 1.034 2.21 2.528V16z" />
      </svg>
    ),
    href: "https://veyselozturk.com.tr",
  },
  {
    id: 4,
    jsx: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
      </svg>
    ),
    href: "https://veyselozturk.com.tr",
  },
];
const Footer = () => {
  return (
    <footer 
    style={{
      background: "linear-gradient(90deg, rgba(249,183,103,1) 10%, rgba(252,230,108,1) 90%)"
    }}
    className="shadow-2xl mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary">
              Veysel OZTURK
            </h3>
            <p className="text-xs">
              
              Frontend Case Çalışması
            </p>
          </div>
          <div className="flex space-x-4">
            {social.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className=" hover:text-orange-500 duration-500 transition-all hover:text-primary dark:hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.jsx}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t dark:border-gray-700 pt-6 text-center text-sm">
          <a href="https://veyselozturk.com.tr">
            <p>
              &copy; {new Date().getFullYear()} Veysel OZTURK. Tüm hakları
              saklıdır.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

