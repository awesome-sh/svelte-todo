<script>
    export let isWrite;
    export let todos;

    let todo;
    let visible;

    isWrite.subscribe(v => {
        visible = v
    })

    const handleClose = () => {
        isWrite.update(state => !state)
    }

    const handleWrite = () => {
        todos.update(v => {
            const pushItem = {
                id: v.length + 1,
                todo
            }

            let prevTodos;

            if(localStorage.getItem('todos')) {
                prevTodos = JSON.parse(localStorage.getItem('todos'))
                prevTodos.push(pushItem)
            } else {
                prevTodos = v
                prevTodos.push(pushItem)
            }

            localStorage.setItem('todos', JSON.stringify(prevTodos))
            return prevTodos;
        })
        todo = ''
        isWrite.update(v => !v)
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            handleWrite()
        }
    }

</script>

<div class="{visible ? 'default write-wrap': 'default disabled'}">
    <button class="btn-close" on:click={handleClose}>X</button>

    <div class="label">할일</div>
    <input 
        type="text" 
        placeholder="할일..." 
        bind:value={todo} 
        on:keypress={handleEnter}
    />
    <button on:click={handleWrite}>+ 추가</button>
</div>

<style>
    .default {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.795);
        transition: all 0.2s ease-out;
    }

    .write-wrap {
        opacity: 1;
        width: 100%;
    }

    .disabled {
        opacity: 0;
        width: 0%;
    }

    .label {
        width: 80%;
        height: 45px;
        line-height: 45px;
        color: #fff;
    }

    .btn-close {
        width: 40px;
        height: 40px;
        border-radius: 40px;
    }

    input {
        padding-left: 15px;
        width: 80%;
        border: none;
    }

    button {
        width: 80%;
    }

    button:hover {
        color: #fff;
        background: #ff3e00;
    }


</style>