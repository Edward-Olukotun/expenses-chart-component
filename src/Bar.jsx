import "./App.css";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

function App() {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];

  return (
    <ResponsiveContainer width="70%" aspect={1}>
      <BarChart
        width={10}
        height={300}
        data={data}
        margin={{
          top: 50,
          right: 0,
          left: 170,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <Bar dataKey="amount" barSize={30} fill="#F3A596" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default App;
