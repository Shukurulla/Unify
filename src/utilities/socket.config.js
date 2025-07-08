import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:1234"; // Localda test qilish uchun

const createSocketConnection = () => {
  const socket = io(SOCKET_URL, {
    transports: ["polling", "websocket"],
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 10,
    timeout: 20000,
    autoConnect: true,
    // withCredentials: true, // Bu qatorni olib tashlang yoki false qiling
    withCredentials: false, // Explicit false
    forceNew: false, // forceNew: true dan false ga o'zgartiring
    path: "/socket.io/",
  });

  // Connection monitoring
  socket.on("connect", () => {
    console.log("✅ Connected to server");
    console.log("Socket ID:", socket.id);
    console.log("Transport type:", socket.io.engine.transport.name);

    // Test connection
    socket.emit("test_connection");
  });

  socket.on("connect_error", (error) => {
    console.error("❌ Connection error:", {
      message: error.message,
      type: error.type,
      description: error.description,
    });
  });

  socket.on("disconnect", (reason) => {
    console.log("🔌 Disconnected:", reason);
    if (reason === "io server disconnect") {
      // Server tomonidan uzilgan, qayta ulanishga harakat qilamiz
      setTimeout(() => {
        socket.connect();
      }, 1000);
    }
  });

  // Error handling
  socket.on("error", (error) => {
    console.error("❌ Socket error:", error);
  });

  // Reconnection monitoring
  socket.io.on("reconnect", (attempt) => {
    console.log(`🔄 Reconnected after ${attempt} attempts`);
  });

  socket.io.on("reconnect_attempt", (attempt) => {
    console.log(`🔄 Reconnection attempt ${attempt}`);
    // Har bir urinishda transport turini almashtirib ko'ramiz
    if (attempt % 2 === 0) {
      socket.io.opts.transports = ["websocket", "polling"];
    } else {
      socket.io.opts.transports = ["polling", "websocket"];
    }
  });

  socket.io.on("reconnect_error", (error) => {
    console.error("❌ Reconnection error:", error);
  });

  socket.io.on("reconnect_failed", () => {
    console.log("❌ Reconnection failed");
    // Qayta ulanish muvaffaqiyatsiz bo'lganda
    console.warn("Server bilan aloqa uzildi. Sahifani yangilang!");
  });

  // Test response handler
  socket.on("test_response", (data) => {
    console.log("✅ Test response received:", data);
  });

  return socket;
};

const socket = createSocketConnection();

export default socket;
