export default function Courses() {
    const courses = [
        { original: "TM-5500", hover: "Ingeniería de las Aplicaciones Interactivas" },
        { original: "TM-5501", hover: "Desarrollo de Aplicaciones Interactivas II" },
        { original: "TM-5502", hover: "Diseño de Páginas Web" },
        { original: "TM-5503", hover: "Inglés para Informática" },
        { original: "TM-5504", hover: "Taller Multimedia" },
    ];

    return (
        <div className="flex items-center justify-center shadow-xl flex-col gap-4 w-80 p-14 m-auto">
            <h2 className="font-bold">Registered Courses</h2>
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="group relative text-center w-full shadow-xl rounded-full py-4 transition-transform duration-300 transform "
                >
                    <span className="group-hover:hidden w-40 cursor-pointer">{course.original}</span>
                    <span className="hidden group-hover:block w-40 cursor-pointer m-auto">{course.hover}</span>
                </div>
            ))}
        </div>
    );
}