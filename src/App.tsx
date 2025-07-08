import { Layout, Header, BoardContainer } from "./lib/components";
import { ChessBoard } from "./lib/components";

const App = () => {
  return (
    <Layout>
      <Header />
      <BoardContainer>
        <ChessBoard />
      </BoardContainer>
    </Layout>
  );
};

export default App;
