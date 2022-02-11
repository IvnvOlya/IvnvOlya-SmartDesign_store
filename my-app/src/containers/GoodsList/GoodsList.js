import List from "../../components/List/List";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { goods } = state;
  return { goods: goods };
}
export default connect(mapStateToProps, null)(List);
