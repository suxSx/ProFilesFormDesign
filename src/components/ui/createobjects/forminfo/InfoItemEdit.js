import classes from "./InfoItemEdit.module.css";
import {Card} from "@material-ui/core";
import {useSelector} from "react-redux";
import EditInfoItemField from "./EditInfoItemField";

const InfoItemEdit = () => {
    /* Get Current Items*/
    const infoItems = useSelector(state => state.formitems.formText);

    const mappedInfo = infoItems.info.map((item) => (
        <EditInfoItemField key={item.id} item={{id: item.id, name: item.type, hint: item.text}}  />
    ));

    return (
        <Card className={`${classes["card-style"]}`}>
            <h3> Basic Form Information </h3>
            <div className={classes["nav-container"]}>
                <EditInfoItemField item={{id: "title", name: "title", hint: infoItems.title}} />
                <EditInfoItemField item={{id: "subtitle", name: "subtitle", hint: infoItems.titleLeft}} />
                {mappedInfo}
            </div>
        </Card>
    );
};

export default InfoItemEdit;