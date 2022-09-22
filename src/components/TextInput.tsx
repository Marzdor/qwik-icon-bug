import { $, component$, useStore, useStylesScoped$ } from "@builder.io/qwik";

import eyeHide from "/eye-hide.png";
import eyeShow from "/eye-show.png";

export interface TextInputProps {
  readonly label: string;
  readonly type: string;
  readonly isPassword?: boolean;
}

export const TextInput = component$((props: TextInputProps) => {
  const state = useStore({
    showPassword: false,
  });

  useStylesScoped$(`
    .container {
        position: relative;
        max-width: 300px;
    }
    .hasError {
        background-color: #373737;
        font-size: 1.3em;
        border: 1.5px solid #CC0000;
        border-radius: 5px;
        width: 100%;
        margin: 3px 0px 0 0px;
        height: 50px;
        color: #ffffff;
        padding-left: 10px;
        box-sizing: border-box;
    }

    input {
        font-size: 1rem;
        width: 100%;
        margin: 3px 0px 0px 0px;
        height: 50px;
        border-radius: 5px;
        border: solid 1px #ffffff;
        background-color: #373737;
        color: #ffffff;
        padding-left: 10px;
        box-sizing: border-box;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        margin-top: 10px;
    }

    .icon {
        position: absolute;
        right: 10px;
        top: 37px;
        width: 23px;
        height: 16px;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
  }`);

  const toggleShowPassword = $(() => {
    state.showPassword = !state.showPassword;
  });

  return (
    <div class="container">
      <label htmlFor={`input-${props.label}`}>{props.label}</label>
      <input type={state.showPassword ? "text" : props.type}></input>
      {props.isPassword ? (
        <img
          src={state.showPassword ? eyeShow : eyeHide}
          class="icon"
          onClick$={toggleShowPassword}
          alt={"Eye Icon to toggle password visibility."}
        />
      ) : null}
    </div>
  );
});
