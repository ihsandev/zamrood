interface TitleProps {
  text: string;
}

export const Title = ({ text }: Readonly<TitleProps>) => {
  return (
    <h1 className="font-unbounded text-2xl md:text-4xl font-semibold text-zrdarkgreen">
      {text}
    </h1>
  );
};
