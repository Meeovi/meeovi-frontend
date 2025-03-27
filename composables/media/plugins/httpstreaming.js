import '@videojs/http-streaming';  // Import the HTTP Streaming plugin

export function useHttpStreaming() {
  return (player) => {
    // The plugin is automatically registered when imported, so no further setup is needed
    // Optionally, you can add any plugin-specific configuration here if needed
  };
}
