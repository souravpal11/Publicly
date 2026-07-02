import React from "react";
import Logo from "../Logo.png";

const Navbar = (props) => {
  const countries = [
    { code: "in", name: "🇮🇳 India" },
    { code: "us", name: "🇺🇸 United States" },
    { code: "gb", name: "🇬🇧 United Kingdom" },
    { code: "au", name: "🇦🇺 Australia" },
    { code: "ca", name: "🇨🇦 Canada" },
    { code: "nz", name: "🇳🇿 New Zealand" },
    { code: "pk", name: "🇵🇰 Pakistan" },
    { code: "bd", name: "🇧🇩 Bangladesh" },
    { code: "np", name: "🇳🇵 Nepal" },
    { code: "lk", name: "🇱🇰 Sri Lanka" },
    { code: "cn", name: "🇨🇳 China" },
    { code: "jp", name: "🇯🇵 Japan" },
    { code: "kr", name: "🇰🇷 South Korea" },
    { code: "sg", name: "🇸🇬 Singapore" },
    { code: "my", name: "🇲🇾 Malaysia" },
    { code: "id", name: "🇮🇩 Indonesia" },
    { code: "th", name: "🇹🇭 Thailand" },
    { code: "ph", name: "🇵🇭 Philippines" },
    { code: "vn", name: "🇻🇳 Vietnam" },
    { code: "ae", name: "🇦🇪 UAE" },
    { code: "sa", name: "🇸🇦 Saudi Arabia" },
    { code: "qa", name: "🇶🇦 Qatar" },
    { code: "de", name: "🇩🇪 Germany" },
    { code: "fr", name: "🇫🇷 France" },
    { code: "it", name: "🇮🇹 Italy" },
    { code: "es", name: "🇪🇸 Spain" },
    { code: "nl", name: "🇳🇱 Netherlands" },
    { code: "be", name: "🇧🇪 Belgium" },
    { code: "ch", name: "🇨🇭 Switzerland" },
    { code: "at", name: "🇦🇹 Austria" },
    { code: "se", name: "🇸🇪 Sweden" },
    { code: "no", name: "🇳🇴 Norway" },
    { code: "dk", name: "🇩🇰 Denmark" },
    { code: "fi", name: "🇫🇮 Finland" },
    { code: "ie", name: "🇮🇪 Ireland" },
    { code: "pl", name: "🇵🇱 Poland" },
    { code: "pt", name: "🇵🇹 Portugal" },
    { code: "gr", name: "🇬🇷 Greece" },
    { code: "tr", name: "🇹🇷 Turkey" },
    { code: "ru", name: "🇷🇺 Russia" },
    { code: "ua", name: "🇺🇦 Ukraine" },
    { code: "mx", name: "🇲🇽 Mexico" },
    { code: "br", name: "🇧🇷 Brazil" },
    { code: "ar", name: "🇦🇷 Argentina" },
    { code: "cl", name: "🇨🇱 Chile" },
    { code: "co", name: "🇨🇴 Colombia" },
    { code: "za", name: "🇿🇦 South Africa" },
    { code: "ng", name: "🇳🇬 Nigeria" },
    { code: "eg", name: "🇪🇬 Egypt" },
  ];

  const languages = [
    { code: "en", name: "🇺🇸 English" },
    { code: "hi", name: "🇮🇳 Hindi" },
    { code: "mr", name: "🇮🇳 Marathi" },
    { code: "bn", name: "🇮🇳 Bengali" },
    { code: "gu", name: "🇮🇳 Gujarati" },
    { code: "ta", name: "🇮🇳 Tamil" },
    { code: "te", name: "🇮🇳 Telugu" },
    { code: "kn", name: "🇮🇳 Kannada" },
    { code: "ml", name: "🇮🇳 Malayalam" },
    { code: "pa", name: "🇮🇳 Punjabi" },
    { code: "ur", name: "🇵🇰 Urdu" },
    { code: "as", name: "🇮🇳 Assamese" },
    { code: "or", name: "🇮🇳 Odia" },
    { code: "fr", name: "🇫🇷 French" },
    { code: "de", name: "🇩🇪 German" },
    { code: "es", name: "🇪🇸 Spanish" },
    { code: "it", name: "🇮🇹 Italian" },
    { code: "pt", name: "🇵🇹 Portuguese" },
    { code: "ru", name: "🇷🇺 Russian" },
    { code: "ar", name: "🇸🇦 Arabic" },
    { code: "zh", name: "🇨🇳 Chinese" },
    { code: "ja", name: "🇯🇵 Japanese" },
    { code: "ko", name: "🇰🇷 Korean" },
    { code: "tr", name: "🇹🇷 Turkish" },
    { code: "nl", name: "🇳🇱 Dutch" },
    { code: "pl", name: "🇵🇱 Polish" },
    { code: "sv", name: "🇸🇪 Swedish" },
    { code: "fi", name: "🇫🇮 Finnish" },
    { code: "da", name: "🇩🇰 Danish" },
    { code: "no", name: "🇳🇴 Norwegian" },
    { code: "el", name: "🇬🇷 Greek" },
    { code: "he", name: "🇮🇱 Hebrew" },
    { code: "th", name: "🇹🇭 Thai" },
    { code: "vi", name: "🇻🇳 Vietnamese" },
    { code: "id", name: "🇮🇩 Indonesian" },
    { code: "ms", name: "🇲🇾 Malay" },
    { code: "fa", name: "🇮🇷 Persian" },
    { code: "uk", name: "🇺🇦 Ukrainian" },
    { code: "cs", name: "🇨🇿 Czech" },
    { code: "hu", name: "🇭🇺 Hungarian" },
    { code: "ro", name: "🇷🇴 Romanian" },
    { code: "sk", name: "🇸🇰 Slovak" },
    { code: "bg", name: "🇧🇬 Bulgarian" },
    { code: "hr", name: "🇭🇷 Croatian" },
    { code: "sr", name: "🇷🇸 Serbian" },
    { code: "sl", name: "🇸🇮 Slovenian" },
  ];

  const categories = [
    {
      code: "top",
      name: (
        <>
          <i className="fa-solid fa-house me-2"></i>Home
        </>
      ),
    },
    {
      code: "business",
      name: (
        <>
          <i className="fa-solid fa-briefcase me-2"></i>Business
        </>
      ),
    },
    {
      code: "politics",
      name: (
        <>
          <i className="fa-solid fa-landmark me-2"></i>Politics
        </>
      ),
    },
    {
      code: "technology",
      name: (
        <>
          <i className="fa-solid fa-microchip me-2"></i>Technology
        </>
      ),
    },
    {
      code: "sports",
      name: (
        <>
          <i className="fa-solid fa-futbol me-2"></i>Sports
        </>
      ),
    },
    {
      code: "health",
      name: (
        <>
          <i className="fa-solid fa-heart-pulse me-2"></i>Health
        </>
      ),
    },
    {
      code: "science",
      name: (
        <>
          <i className="fa-solid fa-flask me-2"></i>Science
        </>
      ),
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container">
        {/* Logo + Icons */}
        <div className="d-flex flex-wrap w-100 justify-content-between align-items-center gap-2">
          <a className="navbar-brand me-1" href="/">
            <img
              src={Logo}
              alt="Publicly"
              style={{ height: "40px", width: "120px" }}
              className="logo"
            />
          </a>

          <button
            className="navbar-toggler btn bg-dark text-white px-3 py-2 my-1 me-1 rounded-pill "
            // style={{
            //       background: "linear-gradient(45deg, #7a00a3, #370085)",
            //     }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#searchBar"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className="d-flex justify-content-evenly gap-1 " style={{ width: "25rem" }}>
            <div className="dropdown">
              <button
               className="btn btn-dark btn-sm dropdown-toggle text-truncate"
style={{ maxWidth: "120px" }}
                data-bs-toggle="dropdown"
              >
                {countries.find((c) => c.code === props.country)?.name ||
                  "Select Country"}
              </button>

              <ul
                className="dropdown-menu bg-dark text-white"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {countries.map((country) => (
                  <li key={country.code}>
                    <button
                      className="dropdown-item bg-dark text-white"
                      onClick={() => props.changeCountry(country.code)}
                    >
                      {country.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-dark btn-sm dropdown-toggle text-truncate"
style={{ maxWidth: "120px" }}
                type="button"
                data-bs-toggle="dropdown"
              >
                {languages.find((lang) => lang.code === props.language)?.name ||
                  "Select Language"}
              </button>

              <ul
                className="dropdown-menu bg-dark text-white"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      className="dropdown-item  bg-dark text-white"
                      onClick={() => props.changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-dark btn-sm dropdown-toggle text-truncate"
style={{ maxWidth: "120px" }}
                type="button"
                data-bs-toggle="dropdown"
              >
                {categories.find((c) => c.code === props.category)?.name ||
                  "Category"}
              </button>

              <ul className="dropdown-menu bg-dark text-white">
                {categories.map((c) => (
                  <li key={c.code}>
                    <button
                      className="dropdown-item bg-dark text-white"
                      onClick={() => props.changeCategory(c.code)}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="collapse navbar-collapse ms-2 my-2 w-300"
          id="searchBar"
        >
          <form
            className="d-flex w-100 bg-dark rounded-pill "
            onSubmit={(e) => {
              e.preventDefault();
              props.searchNews()
            }}
          >
            <div className="input-group shadow-sm rounded-pill overflow-hidden">
              <input
                type="search"
                className="form-control bg-grey text-dark border-dark rounded-pill m-1"
                placeholder="Search headlines"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
              />

              <button
                className="btn text-white px-3 my-1 me-1 rounded-pill"
                style={{
                  background: "linear-gradient(90deg, #0d6efd, #6610f2)",
                }}
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
