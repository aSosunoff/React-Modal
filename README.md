# Modal component React

## Demo:

[https://asosunoff.github.io/React-Modal/](https://asosunoff.github.io/React-Modal/)

### Install component

[npm i @asosunoff/react-modal](https://www.npmjs.com/package/@asosunoff/react-modal)

### Launch project:

```
git clone https://github.com/aSosunoff/React-Modal.git
cd React-Modal
npm i
npm run start
```

### Test project:

```
npm test
```

### Example

**Slots**

- **Modal.Title** - optional

- **Modal.Body** - optional

- **Modal.Footer** - optional

```js
import Modal from "@asosunoff/react-modal";

const App = () => {
  const { isShow, show, hide } = useShow(false);

  return (
    <>
      <Modal isShow={isShow} onHideModal={hide}>
        <Modal.Title>Title</Modal.Title>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>

      <BaseButton onClick={isShow ? hide : show}>Show</BaseButton>
    </>
  );
};
```
