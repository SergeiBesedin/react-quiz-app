import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchQuizes } from "../../redux/actions/actionsQuiz";
import classes from "./QuizList.module.css";
import Loader from "../../components/UI/Loader/Loader";

class QuizList extends React.Component {
  renderQuizes() {
    return this.props.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }
  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов:</h1>
          {this.props.loading && this.props.quizes.length !== 0 ? (
            <Loader />
          ) : (
            <ul>{this.renderQuizes()}</ul>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
