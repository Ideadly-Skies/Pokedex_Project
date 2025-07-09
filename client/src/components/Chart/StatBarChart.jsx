const StatBarChart = ({ stats }) => {
  const maxStat = 150;

  return (
    <div className="flex justify-center items-end gap-4 h-48 mt-6 ">
      {stats.map((stat, index) => {
        const heightPercent = (stat.base_stat / maxStat) * 100;

        return (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-6 rounded-t bg-red-300"
              style={{ height: `${heightPercent}%` }}
              title={stat.base_stat}
            ></div>
            <p className="text-xs mt-1 capitalize text-center text-base-content/70">
              {stat.name.replace("-", " ")}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatBarChart;
