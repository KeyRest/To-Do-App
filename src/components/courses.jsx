export default function Courses() {
    const courses = [
        { original: "TM-5500", hover: "Ingeniería de las Aplicaciones Interactivas" },
        { original: "TM-5501", hover: "Desarrollo de Aplicaciones Interactivas II" },
        { original: "TM-5502", hover: "Diseño de Páginas Web" },
        { original: "TM-5503", hover: "Inglés para Informática" },
        { original: "TM-5504", hover: "Taller Multimedia" },
    ];

    return (
        <div className="flex items-center justify-center shadow-xl flex-col gap-4 w-full p-14">
            <h2 className="font-bold">Registered Courses</h2>
            {courses.map((course, index) => (
                <div
                    key={index}
                    className="group relative text-center shadow-xl rounded-full py-4 px-12 transition-transform duration-300 transform hover:scale-125"
                >
                    <span className="group-hover:hidden">{course.original}</span>
                    <span className="hidden group-hover:block">{course.hover}</span>
                </div>
            ))}
        </div>
    );
}