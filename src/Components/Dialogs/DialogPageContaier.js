
import { connect } from 'react-redux';
import DialogPage from "./DialogPage";
import { addMessageDialogAction, changeCurrentDialogAction } from "../../Reducers-BLL/DialogsReducer";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentDialog: (e) => {
            dispatch(changeCurrentDialogAction(e.currentTarget.value))
        },
        addMessageDialog: (message) => {
            dispatch(addMessageDialogAction(message))
        }

    }
};

let AuthRedirectComponent = withAuthRedirect(DialogPage)  //hoc

let CatalogPageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default CatalogPageContainer
