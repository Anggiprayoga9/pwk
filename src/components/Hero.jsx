import React from "react";
import { useState } from "react";
import {
    Checkbox, Card, List, ListItem, CardHeader, CardBody,
    CardFooter, Dialog, DialogHeader, DialogBody, DialogFooter,
    Button, ListItemPrefix, Typography
} from "@material-tailwind/react";

const Hero = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div className="text-black">
            <div className="max-w-full p-[80px] mt-[-16px] w-full mx-auto text-center flex flex-col justify-center">
                <h1 className="text-[#000300] font-bold p-2 md:text-5xl sm:text-4xl text-2xl">Sdirbinsen Pencarian Informasi</h1>
                <p>Jelajahi informasi mengenai data personil, belajar di E-Learning dan mencari material</p>

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

                {/* Start Checkbox Button */}
                <div className="flex justify-center mt-[50px]">
                    <Card className="w-[20%] m-3">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label className="px-3 py-2 flex items-center w-full cursor-pointer">
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0"
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">Kategori 1</Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                    <Card className="w-[20%] m-3">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label className="px-3 py-2 flex items-center w-full cursor-pointer">
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0"
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">Kategori 2</Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                    <Card className="w-[20%] m-3">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label className="px-3 py-2 flex items-center w-full cursor-pointer">
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0"
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">Kategori 3</Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                    <Card className="w-[20%] m-3">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label className="px-3 py-2 flex items-center w-full cursor-pointer">
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0"
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">Kategori 4</Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                </div>
                {/* End Checkbox Button */}

                {/* Start View box 1*/}
                <div className="flex justify-center flex-col">
                    <div>
                        <div className="flex justify-between pt-[100px]">
                            <h4 className="font-bold">Kategori 1</h4>
                            <a href="#" className="text-deep-orange-500 font-bold" >Selengkapnya</a>
                        </div>
                        <div className="mt-[50px] flex justify-between">
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between pt-[100px]">
                            <h4 className="font-bold">Kategori 2</h4>
                            <a href="#" className="text-deep-orange-500 font-bold" >Selengkapnya</a>
                        </div>
                        <div className="mt-[50px] flex justify-between">
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className="w-[50%] m-5">
                                <Card>
                                    <CardHeader color="blue-gray" className="relative h-50">
                                        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 text-left">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography className="text-justify">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                                            in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <div className="flex justify-between">
                                            <Button onClick={handleOpen}>Read More</Button>
                                            <Typography>Update 10/10/2020</Typography>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End View box 1*/}

                <Dialog open={open} handler={handleOpen}>
                    <DialogHeader className="flex justify-between">
                        Detail
                        <Button variant="outlined" color="red" onClick={handleOpen}>
                            close
                        </Button>
                    </DialogHeader>
                    <DialogBody divider className="h-[40rem] overflow-scroll">
                        <Typography className="font-normal">
                            I always felt like I could do anything. That&apos;s the main thing people are controlled
                            by! Thoughts- their perception of themselves! They&apos;re slowed down by their
                            perception of themselves. If you&apos;re taught you can&apos;t do anything, you
                            won&apos;t do anything. I was taught I could do everything. As we live, our hearts turn
                            colder. Cause pain is what we go through as we become older. We get insulted by others,
                            lose trust for those others. We get back stabbed by friends. It becomes harder for us to
                            give others a hand. We get our heart broken by people we love, even that we give them
                            all we have. Then we lose family over time. What else could rust the heart more over
                            time? Blackgold.
                            <br />
                            <br />
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams. If you have the opportunity to play this game of
                            life you need to appreciate every moment. A lot of people don&apos;t appreciate the
                            moment until it&apos;s passed.
                            <br /> <br />
                            There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                            at. That&apos;s my skill. I&apos;m not really specifically talented at anything except
                            for the ability to learn. That&apos;s what I do. That&apos;s what I&apos;m here for.
                            Don&apos;t be afraid to be wrong because you can&apos;t learn anything from a
                            compliment.
                            <br /> <br />
                            It really matters and then like it really doesn&apos;t matter. What matters is the
                            people who are sparked by it. And the people who are like offended by it, it
                            doesn&apos;t matter. Because it&apos;s about motivating the doers. Because I&apos;m here
                            to follow my dreams and inspire other people to follow their dreams, too.
                            <br /> <br />
                            The time is now for it to be okay to be great. People in this world shun people for
                            being great. For being a bright color. For standing out. But the time is now to be okay
                            to be the greatest you. Would you believe in what you believe in, if you were the only
                            one who believed it?
                        </Typography>
                    </DialogBody>
                </Dialog>
            </div>
        </div>

    )
}

export default Hero;