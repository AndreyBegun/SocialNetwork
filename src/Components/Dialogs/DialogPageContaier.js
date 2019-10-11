
import { connect } from 'react-redux';
import DialogPage from "./DialogPage";
import { addMessageDialogAction } from "../../Reducers-BLL/DialogsReducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageDialog: (newMessageBody) => {
            dispatch(addMessageDialogAction(newMessageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogPage)