import { FunctionSquare, IceCream, Pi, Sailboat, Tangent } from "lucide-react";
import React from "react";
import Slot from "./Slot";
import AboutHeader from "./AboutHeader";
import GithubGraph from "./GithubGraph";
import dynamic from "next/dynamic";

const GithubLazy = dynamic(
  () => import("@/components/About/GithubGraph").then((cmp) => cmp.default),
  { ssr: false }
);

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
                title: "Merits",
                content: (
                  <ul>
                    <li>
                      <b>Drivers License:</b> B & AM drivers license
                    </li>
                    <li>
                      <b>Drone:</b> Allowed to fly drones up to 25kg
                    </li>
                    <li>
                      <b>Boat License:</b> Trained boat operator
                    </li>
                    <li>
                      <b>Natural Sciences:</b> Currently studying natural
                      sciences at Nyköpings Enskilda Gymnasium
                    </li>
                    <li>
                      <b>Sailing Green Coach:</b> Trained sailing coach for
                      adults and children
                    </li>
                  </ul>
                ),
              }}
            >
              <Slot.Header text="Merits" />
              <Slot.List>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/3012/3012075.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Drivers License (B & AM)" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/512/1830/1830867.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Drone pilot and operator" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/512/4726/4726403.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Boat license" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/2497/2497631.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Natural Science (gymnasium)" />
                </li>
                <li className="flex flex-row gap-4">
                  <Slot.Image
                    url="https://cdn-icons-png.flaticon.com/128/852/852104.png"
                    height="h-8"
                  />
                  <Slot.Text text="- Sailing coach (green)" />
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
                title: "Favorite Subject",
                content: <p>Favorite subject in school is mathematics</p>,
              }}
            >
              <Slot.Header text="Subject: Mathematics" />
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
                content: <p>Lives in Nyköping Sweden with my family</p>,
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
                title: "Languages",
                content: (
                  <ul>
                    <li>
                      <b>Swedish: </b>Fluent
                    </li>
                    <li>
                      <b>English: </b>Fluent
                    </li>
                    <li>
                      <b>Spanish: </b>Moderate (Spanish 3)
                    </li>
                  </ul>
                ),
              }}
            >
              <Slot.Header text="Languages" />
              <Slot.List className="grid grid-cols-2 gap-1">
                <li>
                  <Slot.Text text="Swedish" />
                </li>
                <li>
                  <Slot.Text text="English" />
                </li>
                <li>
                  <Slot.Text text="Spanish" />
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
                title: "Code",
                content: (
                  <p>
                    My commit graph from Github with the code snippet generating
                    the writing text above uses method chaining and the builder
                    pattern. Each function returns a reference to the
                    TextModifyBuilder which stores state which is needed for the
                    DeletePrevious, the actions are break points which are used
                    for starting other animations
                  </p>
                ),
              }}
            >
              <GithubLazy />
              <div className="w-full flex justify-between items-center flex-grow">
                <div className="w-full flex flex-row justify-between items-center">
                  <Slot.Image url="/code.png" />
                </div>
              </div>
            </Slot>
            <Slot
              className={{
                lg: "",
                xl: "col-start-5 col-end-5 row-start-4 row-end-4",
                md: "col-start-2 col-end-3 row-start-4 row-end-6",
                normal: "",
              }}
              information={{
                title: "Sailing",
                content: (
                  <p>
                    I have sailed for multiple years in my local sailing club
                    NYSS and today Im one of 4 instructors instructing over 20
                    kids between 8-14 years. We have trainings each week and
                    summer camps.
                  </p>
                ),
              }}
            >
              <Sailboat size="100%" color="black" />
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
                    I have an Ender 3 Pro at home that I use for, among other
                    things my UF business Simplito UF together with 3 friends.
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
                  "I like to find new ways to do old things that are quicker and easier, you can call me lazy",
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
                content: <p>10 in binary is 2</p>,
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
                    <p>
                      - Ironic how you sacrifice sleep to chase your dreams{" "}
                    </p>
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
          Click on a square for more information
        </p>
      </div>
    </div>
  );
}

export default About;
