/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import "../../styles/css/dist/grocery.min.css";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import _ from "lodash";
import ModalContent from "./ModalContent";

function Grocery() {
  // localStorage - second Method
  const getLocalData = () => {
    const list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [cond, setCond] = useState({
    value: "",
    // data: localStorage.getItem("listData")
    //   ? JSON.parse(localStorage.getItem("listData"))
    //   : [],
    data: getLocalData(),
    editAction: false,
    editId: "",
    modal: {
      status: false,
      type: "",
      message: "",
    },
  });

  const submitHandler = (e) => {
    // const allData = [];
    // allData.push(...cond.data, {
    //   id: new Date().getTime().toString(),
    //   item: cond.value,
    // });
    // localStorage.setItem("listData", JSON.stringify(allData));
    e.preventDefault();
    if (!cond.editAction && cond.value) {
      setCond(({ data }) => {
        return {
          ...cond,
          modal: {
            status: true,
            type: "add",
            message: "Added successfully",
          },
          value: "",
          data: [
            ...cond.data,
            {
              id: new Date().getTime().toString(),
              item: cond.value,
            },
          ],
        };
      });
    } else if (cond.editAction) {
      setCond({
        ...cond,
        editAction: false,
        value: "",
        data: Array.of(
          ...cond.data.map((foundItem) => {
            if (+foundItem.id === +cond.editId) {
              foundItem.item = cond.value;
            }
            return foundItem;
          })
        ),
      });
    } else {
      setCond({
        ...cond,
        modal: {
          status: true,
          type: "empty",
          message: "Please enter a value",
        },
      });
    }
  };

  const removeItem = (itemId) => {
    const removedList = cond.data.filter(({ id }) => id !== itemId);

    // const removedList = JSON.parse(localStorage.getItem("listData")).filter(
    //   ({ id }) => id !== itemId
    // );
    // localStorage.setItem("listData", JSON.stringify(removedList));
    // console.log(JSON.parse(localStorage.getItem("listData")));
    setCond({
      ...cond,
      modal: {
        status: true,
        type: "remove",
        message: "Item removed",
      },
      // data: JSON.parse(localStorage.getItem("listData")),
      data: removedList,
    });
  };

  const editItem = (editId) => {
    if (cond.data.length > 0) {
      setCond({
        ...cond,
        editId: editId,
        editAction: true,
        modal: {
          status: true,
          type: "edit",
          message: "Editing . . . ",
        },
        value: _.find(cond.data, (duty) => {
          if (duty.id === editId) {
            console.info(duty.item);
            return duty.item;
          }
        }),
      });
    }
    if (cond.data.length === 0) {
      setCond({
        ...cond,
        edit: false,
        editAction: false,
      });
    }
  };

  useEffect(() => {
    const timeOutStatus = setTimeout(() => {
      setCond({ ...cond, modal: { ...cond.modal, status: false } });
    }, 2000);
    return () => clearTimeout(timeOutStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cond]);

  const clearItems = () => {
    cond.data.length = 0;
    setCond({
      ...cond,
      modal: {
        type: "removeAll",
        status: true,
        message: "All removed",
      },
    });
  };

  // localStorage - second Method - useEffect

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(cond.data));
  }, [cond.data]);

  return (
    <article>
      <div className="modal-container">
        {cond.modal.status ? <ModalContent {...cond.modal} /> : ""}
      </div>
      <div className="grocery-container">
        <section>
          <h1>Grocery List</h1>
          <form className="form-control" onSubmit={submitHandler}>
            <input
              type="text"
              name="item"
              id="item"
              value={cond.value}
              placeholder="e.g. Shopping Store"
              onChange={(e) =>
                setCond({ ...cond, value: e.currentTarget.value })
              }
            />
            <button className="btn" type="submit">
              {cond.editAction ? "Edit" : "Add"}
            </button>
          </form>
        </section>
        <section className="list-container">
          <ul>
            {cond.data.map(({ item, id }, index) => {
              return (
                <li key={id}>
                  <article> {item}</article>
                  <article>
                    <BsTrash className="trash" onClick={() => removeItem(id)} />
                    <BiEdit className="edit" onClick={() => editItem(id)} />
                  </article>
                </li>
              );
            })}
          </ul>
          {cond.data.length !== 0 ? (
            <button className="btn" onClick={clearItems}>
              Clear Items
            </button>
          ) : null}
        </section>
      </div>
    </article>
  );
}

export default Grocery;
