<script>
    import { fly } from 'svelte/transition';

    export let todos;
    export let list = []

    todos.subscribe(v => {
        if(localStorage.getItem('todos')) {
            list = JSON.parse(localStorage.getItem('todos'))
        } else {
            list = v
        }
    })

    const handleDelete = (id) => {
        let prevTodos;
        prevTodos = JSON.parse(localStorage.getItem('todos'))
        prevTodos = prevTodos.filter(todo => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(prevTodos))

        todos.update(v => prevTodos)
    }
</script>

<div class="main-wrap">
    {#if list.length > 0}
        <h3>Todos</h3>
        <ul>
            {#each list as item }
                <li transition:fly="{{delay: 50, duration: 300, y :25}}">{item.todo} <button on:click={handleDelete(item.id)}>삭제</button></li>
            {/each}
        </ul>
    {:else}
        <div class="nodata">
            <p>할 일 목록이 존재하지 않습니다.</p>
            <p>[+] 버튼을 눌러 할 일을 추가해보세요</p>
        </div>
    {/if}
</div>

<style>
    .main-wrap {
        width: 100%;
        padding: 20px;
        padding-top: 80px;
    }

    .nodata {
        color: #778394;
        width: 100%;
        height: calc(100vh - 100px);
        display: flex;
        
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    p {
        font-size: 13px;
        height: 25px;
        line-height: 25px;
    }

    h3 {
        color: #ff3e00;
        font-family: 'Raleway', sans-serif;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 300;
    }

    ul {
        width: 100%;
        list-style: none;
    }

    ul li {
        padding-left: 20px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 13px;
        border-bottom: 1px solid #eee;
        transition: all 0.3s ease-out;
    }

    ul li button {
        margin-left: 30px;
        width: 40px;
        height: 28px;
    }

    ul li:hover {
        background: #f5f6f8;
        border-bottom: 1px solid #b1bbce;
    }
</style>