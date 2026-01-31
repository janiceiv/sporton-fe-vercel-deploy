type TCardWithHeaderProps = {
  title: string;
  children: React.ReactNode;
}

const CardWithHeader = ({title,children}: TCardWithHeaderProps) => {
return(
  <div className="bg-white h-fit">
      <div className="px-5 py-4 birder-b border-gray-200">
        <h2 className="font-bold text-lg">
          {title}
        </h2>
      </div>
      {children}
    </div>
)
};

export default CardWithHeader;