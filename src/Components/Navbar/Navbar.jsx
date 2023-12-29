import {
	Box,
	Flex,

	HStack,

	Button,
	useColorModeValue,
	Text

} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export default function Navbar() {

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-around'}>
					
						<Link to='/'>
							<Box textColor='black' fontWeight='semibold' fontSize='25px'>HOME</Box>
						</Link>
						<HStack  as={'nav'} spacing={44} display={{ base:'none', md: 'flex' }} >
							<Link to='/'>
								
								<Button variant={'solid'}
								colorScheme={'teal'}
								>
								ADD NEW TO-DO
								</Button>
							</Link>

							<Link to='/crud'>
							<Button variant={'solid'}
								colorScheme={'teal'}
								fontWeight='500'
								>
								 LIST TO-DO
								</Button>
							</Link>
						</HStack>
				
					 
				</Flex>
			</Box>
		</>
	)
}