import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getListTodo();
  }, []);

  // get list todo from server
  const getListTodo = async () => {
    const result = await axios.get(
      "https://6319968e8e51a64d2be76eed.mockapi.io/todos"
    );
    setTodos(result.data);
  };

  return (
    <div>
      <ul>
        {todos ? (
          todos.map((item, index) => {
            return <li>{item.name}</li>;
          })
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}
