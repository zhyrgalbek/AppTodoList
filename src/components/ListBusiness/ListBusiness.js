import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@mui/material";
// import { useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropDown from "../DropDown/DropDown";
import GetModal from "../Modal/GetModal";
import EditComponent from "./EditComponent";
import DeleteComponent from "./DeleteComponent";
// import TimerItem from "../TimerItem/TimerItem";
import ItemComponent from "./ItemComponent";
import { useDispatch } from "react-redux";
import TimerItem from "../TimerItem/TimerItem";

const massiv = [
  {
    text: "edit",
    onClick: (
      text,
      id,
      razmer,
      vremya,
      variant,
      handleClose,
      onCloseModal,
      handleOpenModal,
      setModalInfo
    ) => {
      handleClose();
      handleOpenModal();
      setModalInfo((prev) => (
        <EditComponent
          propsText={text}
          propsRazmer={razmer}
          id={id}
          vremya={vremya}
          onCloseModal={onCloseModal}
          variant={variant}
        />
      ));
    },
  },
  {
    text: "delete",
    onClick: (
      text,
      id,
      razmer,
      vremya,
      variant,
      handleClose,
      onCloseModal,
      handleOpenModal,
      setModalInfo
    ) => {
      handleClose();
      handleOpenModal();
      setModalInfo(() => (
        <DeleteComponent
          onCloseModal={onCloseModal}
          text={text}
          id={id}
          variant={variant}
        />
      ));
    },
  },
];

const ListBusiness = ({ list, variant }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState("");
  const [checked, setChecked] = React.useState([0]);
  console.log(checked);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const onCloseModal = () => {
    setOpenModal(false);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // useEffect(() => {
  //   if (checked.length > 1) {
  //     dispatch(todoActions.timeout({ id: checked[checked.length - 1] }));
  //   }
  // }, [checked]);
  return (
    <Paper sx={{ width: "800px" }}>
      <List>
        <ListItem
          sx={{
            borderBottom: "1px solid #a6a6a6",
          }}
        >
          <ListItemIcon />
          <ListItemText
            primary={
              <>
                <ItemComponent
                  name="Аты жону"
                  razmer="размери"
                  vremya="убакыты"
                  out="чыгуу"
                  variant="hr"
                />
              </>
            }
          />
        </ListItem>
        {list?.map((elem) => {
          return (
            <ListItem
              key={elem.id}
              secondaryAction={
                <DropDown
                  icon={<MoreVertIcon />}
                  sx={{ width: "150px" }}
                  items={massiv}
                  text={elem.name}
                  razmer={elem.razmer}
                  vremya={elem.vremya}
                  textId={elem.id}
                  variant={variant}
                  onCloseModal={onCloseModal}
                  handleOpenModal={handleOpenModal}
                  setModalInfo={setModalInfo}
                />
              }
              sx={{
                borderBottom: "1px solid #a6a6a6",
                backgroundColor: elem.timeout && "#eb4f50",
                color: elem.timeout && "#fff",
              }}
            >
              <ListItemIcon onClick={handleToggle(elem.id)}>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(elem.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  // inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <>
                    <ItemComponent
                      name={elem.name}
                      razmer={elem.razmer}
                      vremya={elem.vremya}
                      timeout={elem.timeout}
                      out={elem.out}
                    />
                    <TimerItem
                      vremya={elem.vremya}
                      id={elem.id}
                      day={elem.date}
                    />
                  </>
                }
              />
            </ListItem>
          );
        })}
      </List>
      <GetModal
        open={openModal}
        handleClose={onCloseModal}
        component={modalInfo}
      />
    </Paper>
  );
};

export default ListBusiness;
