import { Billboard as BillboardType } from "../types/Billboard";

interface BillboardProps {
  data: BillboardType;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className="p-2 sm:p-4 lg:p-6 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-[2/1] md:aspect-[4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      />
    </div>
  );
};

export default Billboard;
