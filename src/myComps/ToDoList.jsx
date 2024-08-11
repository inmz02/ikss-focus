import { useState, useEffect} from "react";
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";

import MiniSections from "./MiniSections";
import TemplateWrapper from "./TemplateWrapper";

const ToDoList = () => {
  const [categories, setCategories] = useState({
    generalStudies: [],
    vocabularyBuilding: [],
    listeningAndSpeaking: [],
    grammar: [],
    reading: [],
    onlineCourse: [],
  });

  useEffect(() => {
    const listRef = ref(db, "to-do-list/categories");
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Ensure all categories are arrays
        setCategories({
          generalStudies: Array.isArray(data.generalStudies)
            ? data.generalStudies
            : [],
          vocabularyBuilding: Array.isArray(data.vocabularyBuilding)
            ? data.vocabularyBuilding
            : [],
          listeningAndSpeaking: Array.isArray(data.listeningAndSpeaking)
            ? data.listeningAndSpeaking
            : [],
          grammar: Array.isArray(data.grammar) ? data.grammar : [],
          reading: Array.isArray(data.reading) ? data.reading : [],
          onlineCourse: Array.isArray(data.onlineCourse)
            ? data.onlineCourse
            : [],
        });
      }
    });
  }, []);

  const addInput = (category) => {
    setCategories((prevCategories) => {
      const currentInputs = Array.isArray(prevCategories[category])
        ? prevCategories[category]
        : [];
      return {
        ...prevCategories,
        [category]: [...currentInputs, { text: "", completed: false }],
      };
    });
  };

  const handleInputChange = (category, index, newValue) => {
    setCategories((prevCategories) => {
      const currentInputs = Array.isArray(prevCategories[category])
        ? prevCategories[category]
        : [];
      const updatedInputs = [...currentInputs];
      updatedInputs[index] = { ...updatedInputs[index], text: newValue };
      return {
        ...prevCategories,
        [category]: updatedInputs,
      };
    });
  };

  const handleInputDelete = (category, index) => {
    setCategories((prevCategories) => {
      const currentInputs = Array.isArray(prevCategories[category])
        ? prevCategories[category]
        : [];
      const updatedInputs = currentInputs.filter((_, i) => i !== index);
      return {
        ...prevCategories,
        [category]: updatedInputs,
      };
    });
  };

  const toggleComplete = (category, index) => {
    setCategories((prevCategories) => {
      const currentInputs = Array.isArray(prevCategories[category])
        ? prevCategories[category]
        : [];
      const updatedInputs = [...currentInputs];
      updatedInputs[index] = {
        ...updatedInputs[index],
        completed: !updatedInputs[index].completed,
      };
      return {
        ...prevCategories,
        [category]: updatedInputs,
      };
    });
  };

  // Saving To The Firebase 🔥
  function saveToDoList() {
    const toDoList = { ...categories };

    const listRef = ref(db, "to-do-list");

    set(listRef, { categories: toDoList })
      .then(() => {
        console.log("To-Do list saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving To-Do list:", error);
      });
  }

  // Adding the numbers!
  const generalStudiesNum = categories.generalStudies.length;
  const vocabularyBuildingNum = categories.vocabularyBuilding.length;
  const listeningAndSpeakingNum = categories.listeningAndSpeaking.length;
  const grammarNum = categories.grammar.length;
  const readingNum = categories.reading.length;
  const onlineCourseNum = categories.onlineCourse.length;

  const addNumbers = (num) => {
    switch (num) {
      case 0:
        return " ";
      case 1:
        return "① ";
      case 2:
        return "② ";
      case 3:
        return "③ ";
      case 4:
        return "④ ";
      case 5:
        return "⑤ ";
      case 6:
        return "⑥ ";
      case 7:
        return "⑦ ";
      case 8:
        return "⑧ ";
      case 9:
        return "⑨ ";
      case 10:
        return "⑩ ";
      default:
        return `${num}`;
    }
  };

  return (
    <div className="flex flex-col gap-7 pr-1 overflow-y-auto overflow-x-hidden h-[28rem] md:h-[50rem] myContainerHere">
      <MiniSections
        title={`General Studies`}
        imageScr="https://64.media.tumblr.com/tumblr_lsr38yynjz1qhwcy0.gif"
        content={
          <TemplateWrapper
            inputs={categories.generalStudies}
            id="generalStudiesCategory"
            activeBorder="active:border-[#ff758f]"
            focusBorder="focus:border-[#ff758f]"
            onInputChange={(index, newValue) =>
              handleInputChange("generalStudies", index, newValue)
            }
            onInputDelete={(index) =>
              handleInputDelete("generalStudies", index)
            }
            onToggleComplete={(index) =>
              toggleComplete("generalStudies", index)
            }
          />
        }
        state={true}
        colour="text-[#ff758f]"
        onAdd={() => addInput("generalStudies")}
      />

      <MiniSections
        title={`Vocabulary Building`}
        imageScr="https://64.media.tumblr.com/tumblr_mddkr0hsy71qid2nw.gif"
        content={
          <TemplateWrapper
            inputs={categories.vocabularyBuilding}
            id="vocabularyBuildingCategory"
            activeBorder="active:border-my-blue2"
            focusBorder="focus:border-my-blue2"
            onInputChange={(index, newValue) =>
              handleInputChange("vocabularyBuilding", index, newValue)
            }
            onInputDelete={(index) =>
              handleInputDelete("vocabularyBuilding", index)
            }
            onToggleComplete={(index) =>
              toggleComplete("vocabularyBuilding", index)
            }
          />
        }
        state={true}
        colour="text-my-blue2"
        onAdd={() => addInput("vocabularyBuilding")}
      />

      <MiniSections
        title={`Grammar`}
        imageScr="https://64.media.tumblr.com/ebd63fdc2e638a98d7926bf914f9bd66/tumblr_inline_mojjdl4hXC1qz4rgp.gif"
        content={
          <TemplateWrapper
            inputs={categories.grammar}
            id="grammarCategory"
            activeBorder="active:border-my-brown"
            focusBorder="focus:border-my-brown"
            onInputChange={(index, newValue) =>
              handleInputChange("grammar", index, newValue)
            }
            onInputDelete={(index) => handleInputDelete("grammar", index)}
            onToggleComplete={(index) => toggleComplete("grammar", index)}
          />
        }
        state={true}
        colour="text-my-brown"
        onAdd={() => addInput("grammar")}
      />

      <MiniSections
        title={`Listening and Speaking`}
        imageScr="https://64.media.tumblr.com/tumblr_m9nfw1efge1qid2nw.gif"
        content={
          <TemplateWrapper
            inputs={categories.listeningAndSpeaking}
            id="listeningAndSpeakingCategory"
            activeBorder="active:border-my-pink"
            focusBorder="focus:border-my-pink"
            onInputChange={(index, newValue) =>
              handleInputChange("listeningAndSpeaking", index, newValue)
            }
            onInputDelete={(index) =>
              handleInputDelete("listeningAndSpeaking", index)
            }
            onToggleComplete={(index) =>
              toggleComplete("listeningAndSpeaking", index)
            }
          />
        }
        state={true}
        colour="text-my-pink"
        onAdd={() => addInput("listeningAndSpeaking")}
      />

      <MiniSections
        title={`Reading`}
        imageScr="https://64.media.tumblr.com/tumblr_lsr3eo1Sa11qhwcy0.gif"
        content={
          <TemplateWrapper
            inputs={categories.reading}
            id="readingCategory"
            activeBorder="active:border-my-yellow"
            focusBorder="focus:border-my-yellow"
            onInputChange={(index, newValue) =>
              handleInputChange("reading", index, newValue)
            }
            onInputDelete={(index) => handleInputDelete("reading", index)}
            onToggleComplete={(index) => toggleComplete("reading", index)}
          />
        }
        state={true}
        colour="text-my-yellow"
        onAdd={() => addInput("reading")}
      />

      <MiniSections
        title={`Online Course`}
        imageScr="https://64.media.tumblr.com/a02754c161128112b518c3f0ec9e3850/tumblr_inline_mkhdgzHeZB1qz4rgp.gif"
        content={
          <TemplateWrapper
            inputs={categories.onlineCourse}
            id="onlineCourseCategory"
            activeBorder="active:border-my-purple"
            focusBorder="focus:border-my-purple"
            onInputChange={(index, newValue) =>
              handleInputChange("onlineCourse", index, newValue)
            }
            onInputDelete={(index) => handleInputDelete("onlineCourse", index)}
            onToggleComplete={(index) => toggleComplete("onlineCourse", index)}
          />
        }
        state={true}
        colour="text-my-purple"
        onAdd={() => addInput("onlineCourse")}
      />
    </div>
  );
};

export default ToDoList;
