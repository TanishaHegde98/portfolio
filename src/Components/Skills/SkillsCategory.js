export default function SkillsCategory({
  category,
  categoryName,
  categoryIcons,
}) {
  return (
    <div className="xl:flex my-4 xl:w-fit ">
      <h2 className="flex text-xl text-[#e62e3f] xl:w-32">{categoryName}: </h2>
      <div className="grid grid-cols-3 lg:flex gap-2 w-full border-b-2 border-gray-50 pb-2">
        {category.map((language, index) => (
          <div key={index} className="lg:mx-2">
            <div className="flex">
              <img src={categoryIcons[language]} className="w-fit h-8 w-8" />
              <div className="text-center text-sm lg:text-lg">{language}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
