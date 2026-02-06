import { useEffect } from "react";

function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <h1>IMPRESSUM</h1>
      <p>
        Angaben gemäß § 5 TMG <br /><br />
        Wirtschaftsakademie Schleswig-Holstein GmbH (Gesellschaft mit beschränkter Haftung) <br /><br />
        Hans-Detlev-Prien-Str. 10 <br />
        24106 Kiel <br />
        Deutschland <br /><br />
        Kontakt <br />
        Telefon: (04 31)  30 16 - 0<br />
        E-Mail: info@wak-sh.de
      </p>
    </main>
  );
}

export default Impressum;
