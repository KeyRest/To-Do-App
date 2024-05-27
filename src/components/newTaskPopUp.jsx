import Button from "./button/button.jsx";
import InputText from "./input/inputText/inputText.jsx";
import InputDate from "./input/inputDate/inputDate.jsx";
import Select from "./select/select.jsx";


export default function NewTaskPopUp({ onClickCustom }) {
    return (
        <>
            <div className=" flex flex-col justify-between w-full px-40 py-10 ">
                <h1 className="text-5xl font-extrabold ">
                    Write an essay for TM-5500
                </h1>
                <div className="flex flex-col h-full justify-between gap-8">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full">
                            <div className="py-6">
                                <h2 className="text-2xl font-bold">Task name</h2>
                                <InputText variant="md"></InputText>
                            </div>
                            <div className="py-6">
                                <h2 className="text-2xl font-bold">Description</h2>
                                <InputText variant="lg"></InputText>
                            </div>
                        </div>
                        <div className="flex flex-col w-full py-14 text-left">
                            <h2 className="text-2xl font-bold">Due date</h2>
                            <InputDate variant=""></InputDate>
                            <h2 className="text-2xl font-bold mt-4">Priority</h2>
                            <Select>
                                <option value="high">High</option>
                                <option value="yellow">Yellow</option>
                                <option value="green">Green</option>
                            </Select>
                            <h2 className="text-2xl font-bold mt-4">Category</h2>
                            <Select>
                                <option value="personal">Personal</option>
                                <option value="university">University</option>
                                <option value="work">Work</option>
                            </Select>
                        </div>
                    </div>
                    <div className=" flex gap-16 my-8">
                        <Button variant="solid-red">Delete Task</Button>

                        <Button variant="border" onClickCustom={onClickCustom}>Close</Button>

                        <Button variant="solid-blue">Save Changes</Button>
                    </div>
                </div>
            </div>
        </>
    );
}