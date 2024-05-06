import Button from "./components/button/button.jsx";
import InputText from "./components/input/inputText/inputText.jsx";
import InputDate from "./components/input/inputDate/inputDate.jsx";
import Select from "./components/select/select.jsx";

export default function NewTaskPopUp() {
    return (
        <>
            <body class="m-12">
                <h1 class="text-5xl font-extrabold py-6 pt-0 w-full">
                    Write an essay for TM-5500
                </h1>
                <div class="flex">
                    <div class="w-2/3">
                        <div class="py-6">
                            <h2 class="text-2xl font-bold">Task name</h2>
                            <InputText variant="md"></InputText>
                        </div>
                        <div class="py-6">
                            <h2 class="text-2xl font-bold">Description</h2>
                            <InputText variant="lg"></InputText>
                        </div>
                        <Button variant="solid-red">Delete Task</Button>
                    </div>
                    <div class="flex flex-col w-1/3 py-14 ml-12 text-left">
                        <h2 class="text-2xl font-bold">Due date</h2>
                        <InputDate variant=""></InputDate>
                        <h2 class="text-2xl font-bold mt-4">Priority</h2>
                        <Select>
                            <option value="high">High</option>
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                        </Select>
                        <h2 class="text-2xl font-bold mt-4">Category</h2>
                        <Select>
                            <option value="personal">Personal</option>
                            <option value="university">University</option>
                            <option value="work">Work</option>
                        </Select>
                        <div class="flex gap-6 mt-20">
                                <Button variant="border">Close</Button>
                                <Button variant="solid-blue">Save Changes</Button>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
