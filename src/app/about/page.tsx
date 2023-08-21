import { Metadata } from "next";

export const metadata: Metadata = {  // для сео оптимизации
	title: 'About | Next App',
}

const About = () => {
    return (
        <h3>
            Select subitem
        </h3>
    );
};

export default About;