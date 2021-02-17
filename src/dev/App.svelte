<script lang="ts">
  import FacebookLogin from "../lib/FacebookLogin.svelte";

  let clientId = "";
  let redirectUri = "https://svelte-facebook-login.netlify.com/";
  let status = "";
</script>

<main>
  <h1>Svelte Facebook Login</h1>
  <h4>Facebook Login Component to Svelte</h4>
  <div class="input-form">
    <input
      id="clientId"
      type="text"
      placeholder="Client ID for GitHub OAuth application "
      bind:value={clientId}
    />
    <input
      id="redirectUri"
      type="text"
      bind:value={redirectUri}
      placeholder="Redirect URI"
    />
    <br />
    <FacebookLogin
      {clientId}
      state="1"
      {redirectUri}
      on:success={() => (status = "Success")}
      on:error={() => (status = "Failure")}
      on:request={() => (status = "Waiting")}
      let:onLogin
    >
      <button on:click={onLogin}>Facebook Login</button>
    </FacebookLogin>
  </div>
  {#if status}
    <p>
      Status:
      <span class={status.toLowerCase()}>{status}</span>
    </p>
  {/if}
</main>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 2px black;
    margin: 0;
  }

  h4 {
    color: white;
    margin: 10px 0px;
  }

  p {
    color: white;
    margin: 10px 0px;
  }

  input {
    width: auto;
    flex: 1;
    margin-right: 15px;
    width: 100%;
  }

  .input-form {
    width: 450px;
    max-width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-top: 40px;
  }

  .success {
    color: #4caf50;
  }

  .failure {
    color: #b71c1c;
  }

  .waiting {
    color: #ffd600;
  }
</style>
