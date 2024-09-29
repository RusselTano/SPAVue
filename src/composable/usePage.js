import { onMounted, onUnmounted, ref } from "vue";

export function usePage() {
  const page = ref(parseHash());

  let removeListener;

  onMounted(() => {
    const listener = () => {
      page.value = parseHash();
    };
    window.addEventListener("hashchange", listener);
    removeListener = () => {
      window.removeEventListener("hashchange", listener);
    };
  });

  onUnmounted(() => {
    removeListener();
  });

  return {
    page,
  };
}

function parseHash() {
  //Window.location.hash -> permet davoir le chemin d'acces
  //reeplace -> remplace # par le vide ''
  return window.location.hash.replace("#","")
}