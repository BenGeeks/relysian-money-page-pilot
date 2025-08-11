import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <div className="container mx-auto flex items-center justify-center">
        <Image src="/images/relysian-logo-2.png" alt="Relysian" width={150} height={29} priority />
        <p className="text-sm mt-4 ml-4 text-center">© 2025 Relysian® are trademarks of ProPerformance GmbH - CHE-381.773.969</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
