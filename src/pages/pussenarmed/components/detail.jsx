import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
} from "@material-tailwind/react";

export default function DetailPussenarmed() {
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
        
        {
            label: "SEJARAH",
            value: "sejarah",
            desc: `Ini Sejarah`,
        },
        {
            label: "MARS",
            value: "mars",
            desc: `Ini Mars`,
        },
        {
            label: "HYMNE",
            value: "hymne",
            desc: `Ini Hymne`,
        },
    ];
    return (
        <div className="flex flex-col p-5">
            <div className="flex items-center flex-col pt-5">
                <img src="https://drive.google.com/uc?export=view&id=1bFyiJdRR5vTBvJ8UH1irqf2KUJH8Itca" className="justify-center" width="150" alt="PUSSENARMED" layout="fill" />
                <Typography className="font-bold pt-10 pb-6 md:text-3xl sm:text-2xl text-xl">Pussenarmed</Typography>
            </div>
            <div className="pt-10">
                <Tabs id="custom-animation" value="sejarah">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>

    );
}