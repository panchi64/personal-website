import {Card, Link, Loading, Row, Spacer, Text} from "@nextui-org/react";
import type {NextPage} from "next";
import {useTheme as useNextTheme} from "next-themes";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
    const {setTheme} = useNextTheme();
    setTheme("dark");

    return (
        <div className={styles.welcome_card}>
            <Card isPressable isHoverable variant="bordered" css={{mw: "50vw"}}>
                <Card.Header>
                    <Row justify="center">
                        <Text h1 css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        }}>Welcome!</Text>
                    </Row>
                </Card.Header>
                <Card.Divider/>
                <Card.Body>
                    <Row justify="center">
                        <Text blockquote lang="en-US">
                            <h3>The website is under development.</h3>
                        </Text>
                    </Row>
                    <Loading type="points-opacity" />
                    <Row justify="center">
                        <Text blockquote lang="en-US">
                            Please check back later!
                        </Text>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row justify="center">
                        <Link
                            color="primary"
                            target="_blank"
                            href="https://github.com/panchi64"
                        >
                            GitHub Profile
                        </Link>
                        <Spacer x={2}/>
                        <Link

                            color="primary"
                            target="_blank"
                            href="https://www.linkedin.com/in/francisco-a-casiano-rosado/"
                        >
                            LinkedIn Profile
                        </Link>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
        ;
};

export default Home;
