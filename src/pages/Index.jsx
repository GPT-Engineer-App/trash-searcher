import React, { useState } from "react";
import { Container, Input, InputGroup, InputLeftElement, VStack, Box, Text, Button, Image, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaSearch, FaHeart } from "react-icons/fa";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Old Sofa", description: "A bit worn out but still comfortable.", image: "https://images.unsplash.com/photo-1603844908699-ff22c77bece8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBzb2ZhfGVufDB8fHx8MTcxNDc2MTk5NXww&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 2, name: "Dining Table", description: "Good condition, barely used.", image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjB0YWJsZXxlbnwwfHx8fDE3MTQ3NjE5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 3, name: "Desk Chair", description: "Needs a bit of cleaning, otherwise fine.", image: "https://images.unsplash.com/photo-1587258459922-4521d3704511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNrJTIwY2hhaXJ8ZW58MHx8fHwxNzE0NzYxOTk2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
    { id: 4, name: "Vintage Lamp", description: "Perfect for collectors.", image: "https://images.unsplash.com/photo-1561881593-af682790c8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGFtcHxlbnwwfHx8fDE3MTQ3NjE5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch />} />
          <Input placeholder="Search for items" value={searchTerm} onChange={handleSearchChange} />
        </InputGroup>
        <SimpleGrid columns={2} spacing={10}>
          {filteredItems.map((item) => (
            <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={item.image} alt={item.name} boxSize="200px" objectFit="cover" />
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {item.name}
              </Text>
              <Text>{item.description}</Text>
              <Button leftIcon={<FaHeart />} colorScheme="pink" variant="solid" mt={3}>
                Claim
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
