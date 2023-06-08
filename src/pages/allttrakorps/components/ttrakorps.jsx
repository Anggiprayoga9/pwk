import React from "react";
import { useNavigate } from "react-router-dom";

import {
    Card, CardHeader, CardBody,
    CardFooter,
    Button, Typography
} from "@material-tailwind/react";

const Allttrakorps = () => {

    const navigate = useNavigate();
    const pussenarmedClick = () => {
        navigate("/pages/pussenarmed");
    }
    const pusdikarmedClick = () => {
        navigate("/pages/pusdikarmed");
    }

    return (

        <div className="text-black">
            {/* <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Column 1</h2>
                        <p>
                            The .navbar-brand can be applied to most
                            elements, but an anchor works best, as some elements might require utility classes or custom styles.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <h2>Column 2</h2>
                        <p>
                            The .navbar-brand can be applied to most
                            elements, but an anchor works best, as some elements might require utility classes or custom styles.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <h2>Column 3</h2>
                        <p>
                            The .navbar-brand can be applied to most
                            elements, but an anchor works best, as some elements might require utility classes or custom styles.
                        </p>
                    </div>
                </div>
            </div> */}
            <div className="max-w-full p-[40px] mt-[-16px] w-full mx-auto text-center flex flex-col justify-center">
                <h1 className="text-[#000300] font-bold p-2 md:text-3xl sm:text-2xl text-xl">ALL TTRAKORPS</h1>

                {/* Start  Seacrh box Button */}
                <div className="relative pt-6 m-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-6 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
                {/* End  Seacrh box Button */}

                {/* Start View box 1*/}
                <div className="flex justify-center flex-col">
                    <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-0">
                        <div className="w-[90%] m-5">
                            <Card>
                                <CardHeader color="white" className="flex justify-center items-center" style={{ height: 150 }}>
                                    <img src="https://drive.google.com/uc?export=view&id=1bFyiJdRR5vTBvJ8UH1irqf2KUJH8Itca" className="justify-center" width="150" alt="PUSSENARMED" layout="fill" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                        PUSSENARMED
                                    </Typography>
                                    <Typography className="text-justify">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                        in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <div className="flex justify-between">
                                        <Button onClick={pussenarmedClick}>Read More</Button>
                                        <Typography>Update 10/10/2020</Typography>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="w-[90%] m-5">
                            <Card>
                                <CardHeader color="white" className="flex justify-center items-center" style={{ height: 150 }}>
                                    <img src="https://drive.google.com/uc?export=view&id=1NFsyZB-PE_HZJMDH5I0rwIpzu2E45K4b" width="150" alt="PUSDIKARMED" layout="fill" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                        PUSDIKARMED
                                    </Typography>
                                    <Typography className="text-justify">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                        in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <div className="flex justify-between">
                                        <Button onClick={pusdikarmedClick}>Read More</Button>
                                        <Typography>Update 10/10/2020</Typography>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="w-[90%] m-5">
                            <Card>
                                <CardHeader color="white" className="flex justify-center items-center" style={{ height: 150 }}>
                                    <img src="https://drive.google.com/uc?export=view&id=1TcVYY4XKaYSj7_GrbIUPUQWwipDDG23k" width="90" height="auto" alt="RESIMEN 1" layout="fill" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                        RESIMEN 1
                                    </Typography>
                                    <Typography className="text-justify">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                        in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <div className="flex justify-between">
                                        <Button>Read More</Button>
                                        <Typography>Update 10/10/2020</Typography>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="w-[90%] m-5">
                            <Card>
                                <CardHeader color="white" className="flex justify-center items-center" style={{ height: 150 }}>
                                    <img src="https://drive.google.com/uc?export=view&id=11CdYVvpfNxsZAdTvD8838F8_RI4NJ7av" alt="RESIMEN 2" width="90" height="auto" layout="fill" />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                        RESIMEN 2
                                    </Typography>
                                    <Typography className="text-justify">
                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                        and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                        in Barcelona.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <div className="flex justify-between">
                                        <Button>Read More</Button>
                                        <Typography>Update 10/10/2020</Typography>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* End View box 1*/}
            </div>
        </div>

    )
}

export default Allttrakorps;