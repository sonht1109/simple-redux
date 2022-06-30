import { connect, defineInitState } from "../redux";

defineInitState({ count: 1 });

const Count = (props: any) => {
  const { count, onClick } = props;

  return (
    <div>
      <View {...{ count }} />
      <Controller {...{ onClick, count }} />
    </div>
  );
};

const View = ({ count }: any) => {
  return <h3>Class component state: {count}</h3>;
};

const Controller = ({ onClick }: any) => {
  return (
    <div>
      <button onClick={() => onClick(1)}>Increase by 1</button>
      <button onClick={() => onClick(5)}>Increase by 5</button>
      <button onClick={() => onClick(-5)}>Decrease by 5</button>
      <button onClick={() => onClick(-1)}>Decrease by 1</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ count: state.count });

const mapActionToProps = {
  onClick: (state: any, val: number) => {
    return { count: state.count + val };
  },
};

export default connect(mapStateToProps, mapActionToProps, Count);
