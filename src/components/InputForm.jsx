export default function InputForm() {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    search: ''
  });

  const { title, description, search } = inputs;

  const onChange = e => {
    const { value, name, search } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };
  const onReset = () => {
    setInputs({
      search: ''
    });
  };

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <div>
        <p>curation title</p>
        <input name="title" placeholder="title" style={{ ...fontStyle, width: 400 }}></input>
        <p>curation description</p>
        <textarea
          name="description"
          placeholder="description"
          style={{ ...fontStyle, width: 400, height: 150, resize: 'none' }}
        ></textarea>
        <p>search music</p>
        <input name="search" placeholder="search" style={{ ...fontStyle, width: 400 }}></input>
      </div>
      <div>
        <p>curation list</p>
        <ComboBox list={ctype} name="curation type" />
      </div>
    </div>
  );
}
