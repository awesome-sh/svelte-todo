<script>
    export let isWrite;

    const handleToggleWrite = () => {
        isWrite.update(state => !state)
    }
</script>

<div class="top-wrap">
    <div class="top">
        <div class="title">
            ToDo Application <p>with Svelte</p>
        </div>

        <div class="write">
            <div on:click={handleToggleWrite} class="write-icon">+</div>
        </div>
    </div>
</div>

<style>
    .top-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
    }

    .top {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 15px;
        padding-right: 15px;
        border-bottom: 1px solid #eee;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        display: grid;
        align-items: center;
        grid-template-columns: 50% 50%;
    }

    .title {
        display: flex;
    }

    .write {
        display: flex;
        justify-content: flex-end;
    }

    .write-icon {
        cursor: pointer;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        font-weight: 800;
        color: #fff;
        background: #dddad9;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-out;
    }

    .write-icon:hover {
        transform: rotate(180deg);
        background: #ff3e00;
    }

    p {
        margin-left: 10px;
        font-size: 12px;
        color: #ff3e00;
    }
</style>