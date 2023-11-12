import { FunctionSquare, IceCream, Pi, Sailboat, Tangent } from "lucide-react";
import React from "react";
import Slot from "./Slot";
import AboutHeader from "./AboutHeader";

function About() {
  return (
    <div className="max-h-screen">
      <AboutHeader />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-2/3 aspect-video m-4 group">
            <Slot
              className={{
                lg: "col-start-1 col-end-3 row-start-1 row-end-1",
                md: "col-start-1 col-end-3 row-start-1 row-end-1",
                normal: "",
                xl: "col-start-1 col-end-3 row-start-1 row-end-3",
              }}
              information={{
                title: "Meriter",
                content: (
                  <ul>
                    <li>
                      <b>Körkort:</b> AM & B körkort
                    </li>
                    <li>
                      <b>Drönare:</b> Får flyga drönare upp till 25kg
                    </li>
                    <li>
                      <b>Förarbevis: </b>Utbildad båtförare
                    </li>
                    <li>
                      <b>Naturvetenskap: </b>Pluggar nu naturvetenskap vid
                      Nyköpings Enskilda Gymnasium
                    </li>
                    <li>
                      <b>Tränare grön: </b>Utbildad seglings tränare för vuxna
                      och barn
                    </li>
                  </ul>
                ),
              }}
            >
              <Slot.Header text="Meriter" />
              <Slot.List>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/3012/3012075.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Körkort (AM & B)" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/512/1830/1830867.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Drönar Pilot & Drönar Operatör" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/512/4726/4726403.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Förarbevis båt" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/2497/2497631.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Naturvetenskap (gymnasium)" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/852/852104.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Tränare grön (segling)" />
                </li>
              </Slot.List>
            </Slot>
            <Slot
              className={{
                lg: "",
                xl: "col-start-3 col-end-3 row-start-1 row-end-1",
                md: "",
                normal: "",
              }}
              information={{
                title: "Favorit ämne",
                content: <p>Favorit ämne i skolan är matematik</p>,
              }}
            >
              <Slot.Header text="Ämne: Matematik" />
              <div className="flex flex-row gap-2">
                <Pi size="100%" color="black" />
                <FunctionSquare size="100%" color="black" />
                <Tangent size="100%" color="black" />
              </div>
            </Slot>
            <Slot
              className={{
                lg: "col-start-3 col-end-4 row-start-3 row-end-4",
                xl: "col-start-4 col-end-4 row-start-1 row-end-1",
                md: "",
                normal: "",
              }}
              information={{
                title: "Nyköping",
                content: <p>Bor i Nyköping med familj</p>,
              }}
            >
              <Slot.Center>
                <Slot.Image
                  rounded
                  fullHeight
                  url="https://www.sj.se/content/dam/externt/bilder/natur-landskap/vyoverhamnenotorgetinykoping-2019.jpg/_jcr_content/renditions/cq5dam.web.590.y.jpg"
                />
              </Slot.Center>
            </Slot>
            <Slot
              className={{
                lg: "",
                xl: "col-start-5 col-end-5 row-start-1 row-end-1",
                md: "",
                normal: "",
              }}
              information={{
                title: "Språk",
                content: (
                  <ul>
                    <li>
                      <b>Svenska: </b>Talar flytande svenska
                    </li>
                    <li>
                      <b>Engelska: </b>Talar flytande engelska
                    </li>
                    <li>
                      <b>Spanska: </b>Talar spanska, högsta kurs Spanska 3
                    </li>
                  </ul>
                ),
              }}
            >
              <Slot.Header text="Språk" />
              <Slot.List className="grid grid-cols-2 gap-1">
                <li>
                  <Slot.Text text="Svenska" />
                </li>
                <li>
                  <Slot.Text text="Engelska" />
                </li>
                <li>
                  <Slot.Text text="Spanska" />
                </li>
              </Slot.List>
            </Slot>
            <Slot
              className={{
                lg: "col-start-1 col-end-3 row-start-2 row-end-4",
                xl: "col-start-3 col-end-5 row-start-2 row-end-5",
                md: "col-start-1 col-end-3 row-start-3 row-end-3",
                normal: "",
              }}
              information={{
                title: "Segling",
                content: (
                  <p>
                    Har seglat i flera år i seglingsklubben NYSS och är idag
                    tränare där tillsammans med 3 andra tränare. Tillsammans har
                    vi måndagssegling och sommarlägren för barnen.
                  </p>
                ),
              }}
            >
              <Sailboat size="100%" color="black" />
            </Slot>
            <Slot
              className={{
                lg: "",
                xl: "col-start-5 col-end-5 row-start-4 row-end-4",
                md: "col-start-2 col-end-3 row-start-4 row-end-6",
                normal: "",
              }}
              information={{
                title: "Favoriter",
                content: (
                  <ul>
                    <li>
                      <b>Mat: </b>Sushi
                    </li>
                    <li>
                      <b>Dessert: </b>Glass
                    </li>
                  </ul>
                ),
              }}
            >
              <IceCream size="100%" color="black" />
            </Slot>
            <Slot
              className={{
                lg: "col-start-1 col-end-2 row-start-4 row-end-7",
                xl: "col-start-5 col-end-5 row-start-2 row-end-4",
                md: "",
                normal: "",
              }}
              information={{
                title: "3D Printer",
                content: (
                  <p>
                    Har en Ender 3 Pro hemma som jag bland annat använt för att
                    driva UF företaget Simplito UF tillsammans med 3 kompisar
                  </p>
                ),
              }}
            >
              <Slot.Header text="3D Printer" />
              <Slot.Text text="Ender 3 Pro" />
              <Slot.Center>
                <Slot.Image url="https://cdn-icons-png.flaticon.com/128/7309/7309625.png" />
              </Slot.Center>
            </Slot>
            <Slot
              className={{
                lg: "col-start-2 col-end-4 row-start-6 row-end-6",
                xl: "col-start-3 col-end-6 row-start-5 row-end-5",
                md: "col-start-1 col-end-3 row-start-7 row-end-7",
                normal: "",
              }}
              information={{
                title: "Bill Gates",
                content:
                  "Jag gillar att söka efter nya och snabbare sätt att göra saker på för att jobba mera effektivt",
              }}
            >
              <Slot.Center>
                <Slot.Text
                  text="I choose a lazy person to do a hard job. Because a lazy person will
            find an easy way to do it"
                />
                <Slot.Text text="- Bill Gates" />
              </Slot.Center>
            </Slot>
            <Slot
              className={{
                lg: "col-start-3 col-end-4 row-start-4 row-end-6",
                xl: "col-start-1 col-end-2 row-start-3 row-end-6",
                md: "",
                normal: "",
              }}
              information={{
                title: "Humor",
                content: <p>10 i binära talsystemet är 2</p>,
              }}
            >
              <Slot.Center>
                <Slot.Image
                  rounded
                  url="https://static.displate.com/280x392/displate/2023-04-12/9c3bd69020c2f15fe97d32a3f5132973_37d9051efbbd6042daafd8cbcdcb6667.jpg"
                />
              </Slot.Center>
            </Slot>
            <Slot
              className={{
                lg: "col-start-2 col-end-3 row-start-4 row-end-6",
                xl: "col-start-2 col-end-3 row-start-3 row-end-6",
                md: "",
                normal: "",
              }}
              information={{
                title: "Anis Don Demina",
                content: (
                  <>
                    <p>- Ironiskt hur man offrar sömn för att jaga drömmar</p>
                    <p>Underbarn</p>
                  </>
                ),
              }}
            >
              <Slot.Center>
                <Slot.Image
                  rounded
                  url="https://static.displate.com/280x392/displate/2020-04-03/118c569f6d247fa81468732f74d533f4_d047583bc464999ffae038ea82e0bf42.jpg"
                />
              </Slot.Center>
            </Slot>
          </div>
        </div>
        <p className="w-2/3 text-right font-mono text-white text-md">
          Klicka på en ruta för mer information
        </p>
      </div>
    </div>
  );
}

export default About;
