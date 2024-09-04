import Image from "next/image";

const page = () => {
    return (
        <div className="flex items-center justify-center flex-col md:mx-20 mx-5 gap-16">
            <div className="flex flex-col justify-center items-center gap-8">
                <h2 className="text-4xl font-medium">About</h2>
                <h5 className="text-2xl">Who we are and why we do what we do!</h5>
            </div>
            <div className="md:max-w-[650px]">
                Our company is committed to creating innovative solutions that make a difference in the lives of our customers.
                We believe in a customer-centric approach, where every decision and every product is designed with our users in mind.
                With a team of passionate experts, we strive to push the boundaries of technology and creativity, delivering exceptional value and results.
                Our mission is to transform industries, empower individuals, and build a future where technology seamlessly integrates into everyday life.
            </div>
            <div>
                <Image loading="eager" src="/Blog/img1.png" width={800} height={800} alt="about" />
            </div>
            <div className="md:max-w-[650px]">
                We pride ourselves on maintaining a strong company culture that promotes growth, collaboration, and innovation.
                By fostering an environment where every voice is heard and every idea is valued, we ensure that our team is motivated to create impactful solutions.
                Our core values reflect our commitment to integrity, transparency, and excellence in everything we do.
                <div className="mt-8">
                    <h5 className="text-xl font-medium mb-2"> Here are some of the key aspects that define us:</h5>
                    <ul>
                        <li>
                            <span className="text-DarkGray text-lg">Innovation</span> Continuously pushing the boundaries to create cutting-edge products.
                        </li>
                        <li>
                            <span className="text-DarkGray text-lg">Customer Focus:</span> Listening to our customers and developing solutions that truly meet their needs.
                        </li>
                        <li>
                            <span className="text-DarkGray text-lg">Integrity:</span> Upholding honesty and ethical standards in all our business practices.
                        </li>
                        <li>
                            <span className="text-DarkGray text-lg">Excellence:</span> Striving for the highest quality in everything we do.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <Image loading="eager" src="/Blog/img4.png" width={500} height={500} alt="about" />
            </div>
            <div className="md:max-w-[650px]">
                Looking to the future, our company aims to expand our reach globally, impacting more lives through our innovative products and services.
                We are dedicated to continuous improvement, learning from each experience, and growing stronger as a team.
                Together, we envision a world where technology empowers people, businesses, and communities to achieve their fullest potential.
            </div>
        </div>
    );
};
export default page;
