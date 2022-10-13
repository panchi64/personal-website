import { Card, Grid, Text } from "@nextui-org/react";

import styles from "../../styles/components/cards/SideBarCard.module.css";

import { NextPage } from "next";

const SideBarCard: NextPage = () => {
  // TODO: Add the capability of making the information in the sidebar dynamic by using firebase docs
  // this means enabling the capacity of changing text, images, and links within the sidebar as well as its position on the page (left or right or bottom)

  return (
    // TODO: Add the ability to change the position in the line below
    <div className={styles["sidebar-container"]}>
      <div className={styles["sidebar-right"]}>
        <Card variant="bordered">
          <Card.Body>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              voluptates suscipit dolores quibusdam at a cupiditate sapiente
              eligendi ipsum ratione, blanditiis sit illo repellat mollitia ea
              provident molestias voluptatem nobis saepe minus fuga
              reprehenderit recusandae! Voluptas possimus, deleniti voluptatem
              corrupti ut amet soluta iure debitis rerum quos numquam! Quos
              rerum dicta adipisci facilis repudiandae nesciunt error nam sint
              quo quas. Ut voluptas asperiores voluptates libero autem eos iusto
              exercitationem rem, nesciunt perspiciatis, soluta dicta? Ipsum
              error ad eligendi enim numquam? Temporibus nihil eos, cupiditate
              voluptate voluptatibus ipsum minus pariatur ipsa consequatur,
              quasi libero. Eum magni eligendi repellat nam deserunt
              perspiciatis iste, dicta doloribus eius blanditiis sequi tempora
              quae provident repudiandae reiciendis totam. Expedita, voluptatum
              dolorum distinctio laboriosam, debitis consequatur at odit esse
              temporibus tempora ratione harum natus velit assumenda porro.
              Laborum dolor voluptatibus tenetur, nihil incidunt dicta ipsa,
              aliquid aperiam ratione qui nemo voluptate sunt repellendus earum.
              Vero dolorem deleniti eos voluptas autem dicta esse possimus harum
              repellendus qui sunt tempora beatae sit, eum reiciendis vel
              eveniet accusantium consequatur facere. Sint deleniti fuga neque
              iusto a velit natus quia explicabo amet ratione reiciendis dolores
              id iure delectus deserunt, ex assumenda quo quidem commodi sit
              voluptatem, dicta odio. Error, iste consectetur officia excepturi
              assumenda exercitationem nemo vitae facilis veritatis? Ab,
              accusamus harum magni provident praesentium officiis rem iste
              temporibus dicta blanditiis sapiente est eius nemo odio excepturi
              alias. Ipsum impedit, at, sint modi saepe facere ex earum
              molestiae ad temporibus velit, vel laudantium soluta eaque
              delectus magni maiores. Labore illo quis, tempore perspiciatis
              necessitatibus at a blanditiis et quasi nobis saepe sit hic,
              aliquid dolores minus. Temporibus adipisci soluta nemo deserunt
              facere exercitationem quisquam perferendis eum blanditiis
              architecto repellendus sit illum, aspernatur, explicabo incidunt
              quos rem optio? Numquam itaque rem architecto amet, ipsa sint!
              Natus animi doloremque repudiandae quidem, voluptatem cum!
            </Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SideBarCard;
