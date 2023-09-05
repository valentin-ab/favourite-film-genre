
function CommentsForm({ inputText, setInputText, comments, setComments }) {
    function handleInput(e) {
      setInputText(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setComments([
       ...comments,
       {text: inputText}
      ])
      setInputText('')
    }
      
    return (
      <form onSubmit={handleSubmit}>
        <input value={inputText} type="text" className="todo-input" onChange={handleInput} />
        <button type="submit" className="todo-button">Add comment</button>
      </form>
    )
  }
  
  export default CommentsForm;