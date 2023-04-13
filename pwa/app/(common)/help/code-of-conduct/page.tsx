import matter from "gray-matter";
import { marked } from "marked";
import CodeOfConductPage from "./components/CodeOfConductPage";

const getCodeOfConductContent = async () => {
  const file = await fetch(
    "http://raw.githubusercontent.com/api-platform/.github/main/.github/CODE_OF_CONDUCT.md"
  );
  const content = await file.text();
  const matterResult = matter(content);
  const processedContent = await marked(matterResult.content);
  return processedContent?.toString();
};

export default async function Page() {
  const data = await getCodeOfConductContent();
  return <CodeOfConductPage content={data} />;
}
