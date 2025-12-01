import StackIcon from 'tech-stack-icons';

export const TechStack = () => {
  return (
    <div className="flex">
      <div className="relative w-full rounded-md flex flex-row flex-wrap justify-evenly gap-3 p-0 shadow-lg shadow-stone-300 dark:shadow-stone-950 bg-[var(--overlay-color)] sm:p-8">
        <figure aria-label="React Icon" role="img" title="React">
          <StackIcon
            name="react"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure
          aria-label="React Icon"
          role="img"
          title="Android jetpack compose"
        >
          <StackIcon
            name="android"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>

        <figure aria-label="React Icon" role="img" title="React Gatsby">
          <StackIcon
            name="gatsby"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure aria-label="React Icon" role="img" title="Next js">
          <StackIcon
            name="nextjs2"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure aria-label="React Icon" role="img" title="HTML">
          <StackIcon
            name="html5"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure aria-label="React Icon" role="img" title="Material UI">
          <StackIcon
            name="materialui"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure aria-label="React Icon" role="img" title="Springboot Java">
          <StackIcon
            name="spring"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
        <figure aria-label="React Icon" role="img" title="Java">
          <StackIcon
            name="java"
            className="w-16 h-16 sm:w-12 sm:h-12 rounded animate-bounce"
          />
        </figure>
      </div>
    </div>
  );
};
