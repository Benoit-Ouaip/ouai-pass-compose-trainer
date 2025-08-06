interface InfoCardProps {
  title: string;
  message: string;
  logo: string;
  color: string;
}

const InfoCard = ({ title, message, logo, color }: InfoCardProps) => {
  return (
    <div className="ouaip-card p-6 h-full flex flex-col">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto ${color}`}>
        <img src={logo} alt="OUAIP Logo" className="w-12 h-12 object-contain" />
      </div>
      
      <h3 className="text-xl font-semibold text-ouaip-dark-blue mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-muted-foreground flex-grow text-center">
        {message}
      </p>
    </div>
  );
};

export default InfoCard;