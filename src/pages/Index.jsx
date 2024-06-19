import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "/images/spaghetti-carbonara.jpg",
    link: "#"
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
    image: "/images/chicken-tikka-masala.jpg",
    link: "#"
  },
  {
    title: "Beef Stroganoff",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).",
    image: "/images/beef-stroganoff.jpg",
    link: "#"
  }
];

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Recipe Sharing Website</Heading>
        <Text fontSize="lg" textAlign="center">Discover and share your favorite recipes with the world!</Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{recipe.title}</Heading>
                <Text mb={4}>{recipe.description}</Text>
                <Link href={recipe.link} color="teal.500" isExternal>
                  View Recipe <FaExternalLinkAlt />
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;