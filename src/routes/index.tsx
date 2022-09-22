import type { DocumentHead } from "@builder.io/qwik-city";
import { TextInput } from "~/components/TextInput";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div>
      <TextInput label="Click eye icon to crash" type="text" isPassword />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
