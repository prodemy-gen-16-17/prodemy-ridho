import React from "react";
import FormFooter from './FormFooter';
import LinkFooter from './LinkFooter';

function Footer(props) {
    return (
        <footer className="bg-[#000000] pt-16 pb-12 border-1 border-black font-sosial">
            <div className="container grid grid-cols-4 mx-auto gap-10">
                <div className="col-span-1 space-y-8">
                    <p className="text-white font-bold text-4xl">LET'S STAY IN TOUCH</p>
                    <FormFooter />
                    <p className="text-white font-medium">{props.formFooter}</p>
                </div>


                <div className="col-span-2 grid grid-cols-2 gap-8 items-center">
                    {props.linkFooter.map((columnFooter, index) => (
                        <LinkFooter key={index} title={columnFooter.title} links={columnFooter.links} />
                    ))}
                </div>

            </div>
        </footer>
    );
}

export default Footer;