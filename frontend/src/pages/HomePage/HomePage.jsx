import { Highlight, Heading } from "@chakra-ui/react";
const HomePage = () => {
  return (
    <div>
      <Heading lineHeight="tall" mt={4} ml={8} mr={8}>
        <Highlight
          query={["welcome", "Task Management"]}
          styles={{ px: "2", py: "1", rounded: "full", bg: "blue.200" }}>
          Welcome to our Task Management Web App! We&apos;re delighted to have
          you here. Our platform is designed to streamline your task management
          process, making it easier and more efficient to organize, prioritize,
          and accomplish your tasks. With intuitive features and a user-friendly
          interface, we aim to enhance your productivity and help you stay on
          top of your goals. Feel free to explore the various tools and
          functionalities we offer, and don&apos;t hesitate to reach out if you
          have any questions or need assistance. We&apos;re here to support you
          every step of the way. Thank you for choosing our Task Management Web
          App. Let&apos;s start accomplishing great things together!
        </Highlight>
      </Heading>
    </div>
  );
};

export default HomePage;
