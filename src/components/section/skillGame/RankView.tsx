import { RankItem } from "./index";

export const RankView = ({ rankList }: { rankList: RankItem[] }) => {
  return (
    <div className="min-w-1/2 mt-4 lg:mt-10 p-4 lg:p-10  border-2  border-secondary-500">
      {rankList.map((rank, index) => {
        return (
          <div key={index} className=" flex flex-row justify-start gap-4">
            <div>No.{index + 1}</div>
            <div>{rank.name}</div>
            <div>{rank.time.toFixed(2)}</div>
          </div>
        );
      })}
    </div>
  );
};
