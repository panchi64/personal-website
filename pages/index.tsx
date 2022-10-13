import { useTheme as useNextTheme } from "next-themes";

import CustomizedNavbar from "../components/navbar/customized-navbar";
import DefaultContactModalwButton from "../components/modals/default-contact-modal-w-button";
import SideBarCard from "../components/cards/side-bar-card";

import { Text } from "@nextui-org/react";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  setTheme("dark");

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CustomizedNavbar
        brand="Panchi"
        links={[
          // TODO: Replace this with a firebase docs connection/request to get the links
          { href: "/work", name: "Work" },
          { href: "/projects", name: "Projects" },
          { href: "/blog", name: "Blog" },
        ]}
        buttons={[
          {
            id: "contact",
            component: <DefaultContactModalwButton />,
          },
        ]}
      />
      <SideBarCard
        body={[
          {
            id: "initial-paragraph",
            component: (
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem itaque doloremque placeat atque excepturi possimus
                pariatur, saepe voluptates facere culpa. Temporibus odio et quia
                minus quo blanditiis aliquid dignissimos quam sapiente. Officiis
                debitis quo odio qui expedita eos iste sapiente eveniet
                repellat, explicabo vel fuga maiores nulla numquam dolores sed
                nostrum fugit! Excepturi, possimus! Aut repellat molestiae
                asperiores? Numquam delectus reiciendis veniam aperiam excepturi
                non ratione qui soluta quibusdam dicta quaerat odio dolore aut
                commodi nesciunt sint voluptas, iure perferendis cum.
                Consectetur facere sunt numquam corporis ipsa, totam
                praesentium? Quibusdam commodi facilis, voluptatibus mollitia
                itaque porro nostrum rem, ea possimus sit doloribus ex eligendi
                tempore similique reprehenderit suscipit aut ratione sint? Ad
                officia suscipit, iste perspiciatis nihil qui et sint ea,
                possimus nisi accusantium minus, optio maiores odit porro.
                Veniam odit distinctio esse harum at reprehenderit natus autem
                ullam reiciendis perferendis vel beatae, facilis est excepturi
                eveniet aliquam! Ipsam, quia. Voluptas nemo aperiam id iure
                error. Ipsam error doloribus aspernatur excepturi vitae ut culpa
                accusantium amet quo corporis rem odit tenetur, dolorem dolores,
                sit aliquam dolor nostrum reiciendis saepe facilis corrupti
                beatae harum temporibus! Nam ipsa sapiente esse architecto. Quod
                in quidem tempora temporibus. Quia ullam quas molestiae vero
                similique temporibus, quae impedit nisi ratione tempore ut iste
                minus qui expedita quibusdam perspiciatis amet placeat, illum
                maxime dolorum voluptatibus ea id consequatur. Obcaecati fuga
                culpa porro dolorem facilis reprehenderit eligendi. Perferendis,
                laboriosam totam sint ea deleniti quis dolorum esse, labore
                ratione consectetur, sed repellat quam officia animi. Molestiae
                pariatur velit nemo nostrum dolorem totam aliquam dicta ducimus
                enim blanditiis id necessitatibus aut placeat saepe excepturi
                iure, beatae sequi quaerat vero recusandae? Eius illo quae non
                dignissimos iure. Praesentium cumque earum cum, iusto commodi
                exercitationem tempore sint ex impedit quod ea. Deleniti ab
                pariatur id. Aliquid quasi neque veritatis voluptatem minima.
              </Text>
            ),
          },
        ]}
      />
    </>
  );
};

export default Home;
