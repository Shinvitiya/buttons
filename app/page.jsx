import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button6 from "@/components/Button6";
import Button7 from "@/components/Button7";
import Button8 from "@/components/Button8";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-20 divide-gray-500 font-[family-name:var(--font-geist-mono)] gap-6 text-white">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />

      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />

    </main>
  );
}
