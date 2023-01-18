import Image from "next/image";

const ProfileSection = () => {
  // TODO: Make active state work in conjunction with activity of other items in the menu
  return (
    <div
      className="
    bg-light-item-bg
    dark:bg-dark-item-bg

    border-light-item-border
    dark:border-dark-item-border
    
      border-[1px]
      rounded

      flex
      mb-4
      content-center

    active:bg-light-blue
    active:border-light-blue
    dark:active:bg-dark-blue
    dark:active:border-dark-blue
    
      py-1
      px-3

      w-full
      h-16
      "
    >
      <div className="
      grid
      grid-cols-[48px_auto]
      gap-2
      md:gap-3

      content-center
      w-full">
        <Image
          alt="Picture of Francisco Casiano"
          src="https://images.unsplash.com/photo-1670506686973-d55fd6e34821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          className="
          max-w-[48px] 
          max-h-[48px]

          rounded-full 
        
          object-cover
          "
          width={128}
          height={128}
        />
        <div className="
        place-self-start 
        self-center
        ">
            <p
              className="
            capitalize
            text-xs
        
            font-semibold

          text-light-black
          dark:text-dark-white
          "
            >
              francisco casiano
            </p>
            <p
              className="
            capitalize
            text-xs

            font-light

          text-light-black/75
          dark:text-dark-white/75
          "
            >
              about
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
