
import {connect} from 'react-redux';
import DialogPage from "./DialogPage";
import {addMessageDialogAction, changeCurrentDialogAction} from "../../Reducers-BLL/DialogsReducer";

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

let CatalogPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogPage);
export default CatalogPageContainer
