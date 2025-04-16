// this is mobile app


import React, { JSX } from 'react';
import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView 
} from 'react-native';

// Mock Data (Replace with API calls or local storage)
const mockProfile = {
    name: "Vivaan Gupta",
    username: "@Vivaan",
    profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQHnUPgiSOwzug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721050860266?e=1749081600&v=beta&t=6zIDdoLwxDLdtBGmmr04jbcmC7uffUlbOe7lHCsn0G0", // Replace with actual image URL
    followers: 100,
    following: 106,
    posts: 50
};

const mockGallery = [
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542890886-40c9094e352a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1594099691860-c940b5768c45?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?q=80&w=2178&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542875272-2037d53b5e4d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542856809-e1230214be24?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1545220406-9464b49eb86e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1539583071493-9f5692f53d52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1675679620439-bacfc67a669a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkwfHx8ZW58MHx8fHx8",
"https://images.unsplash.com/photo-1600948728647-9d7c64a0a4c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGFydCUyMGdpcmwlMjB0aGlua2luZ3xlbnwwfHwwfHx8MA%3D%3D"

    // Add more image URLs
];

// Theme Colors (expand as needed)
const lightTheme = {
    background: '#F8F8F8',
    text: '#222222',
    secondaryText: '#777777',
    accent: '#007AFF', // Example:  iOS Blue
    cardBackground: '#FFFFFF'
};

const darkTheme = {
    background: '#121212',
    text: '#FFFFFF',
    secondaryText: '#AAAAAA',
    accent: '#0A84FF', // Slightly different blue for dark mode
    cardBackground: '#1E1E1E'
};

// Helper function to get theme based on color scheme
const useTheme = () => {
    const colorScheme = useColorScheme();
    return colorScheme === 'dark' ? darkTheme : lightTheme;
};

// Reusable Button Component
const Button = ({ title, onPress, style, textStyle }) => (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);


function AppPro(): JSX.Element {
    const theme = useTheme();

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ADD8E6' }}> {/* Blue Header */}
      <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
          <Text style={[styles.heading, { backgroundColor: '#0000FF', padding: 20, color: 'white' }]}>Clear Exam</Text>
          <ProfileHeader profile={mockProfile} theme={theme} />
          <StatsSection profile={mockProfile} theme={theme} />
          <GalleryPreview gallery={mockGallery} theme={theme} />
          <ActionButtons theme={theme} />
      </ScrollView>
      </SafeAreaView>
  );
}
// Profile Header Component
const ProfileHeader = ({ profile, theme }) => {
    return (
        <View style={styles.profileHeader}>
            <Image source={{ uri: profile.profileImage }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
                <Text style={[styles.profileName, { color: theme.text }]}>{profile.name}</Text>
                <Text style={[styles.profileUsername, { color: theme.secondaryText }]}>{profile.username}</Text>
            </View>
        </View>
    );
};

// Stats Section Component
const StatsSection = ({ profile, theme }) => {
    return (
        <View style={styles.statsContainer}>
            <StatsCard label="Posts" value={profile.posts} theme={theme} />
            <StatsCard label="Followers" value={profile.followers} theme={theme} />
            <StatsCard label="Following" value={profile.following} theme={theme} />
        </View>
    );
};

// Stats Card (Reusable)
const StatsCard = ({ label, value, theme }) => {
    return (
        <View style={[styles.statsCard, { backgroundColor: theme.cardBackground }]}>
            <Text style={[styles.statsValue, { color: theme.text }]}>{value}</Text>
            <Text style={[styles.statsLabel, { color: theme.secondaryText }]}>{label}</Text>
        </View>
    );
};

// Gallery Preview Component
const GalleryPreview = ({ gallery, theme }) => {
    return (
        <View style={styles.galleryContainer}>
            <Text style={[styles.galleryTitle, { color: theme.text }]}>Recent Photos</Text>
            <View style={styles.galleryGrid}>
                {gallery.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.galleryImage} />
                ))}
            </View>
        </View>
    );
};

// Action Buttons Component
const ActionButtons = ({ theme }) => {
    return (
        <View style={styles.actionButtonsContainer}>
            <Button title="Upload Photo" onPress={() => { /* Handle upload */ }} style={{ backgroundColor: theme.accent, }} textStyle={{ color: 'white' }} />
            <Button title="Edit Profile" onPress={() => { /* Handle edit */ }} style={{ borderColor: theme.accent, borderWidth: 1 }} textStyle={{ color: theme.accent }} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      marginTop:50 
  },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15,
        marginLeft:50,
        marginTop:50
    },
    profileInfo: {
        flex: 1,
        marginLeft:15
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileUsername: {
        fontSize: 16,
        color: '#777777',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'spaceAround',
        marginBottom: 20,
        marginleft: 20
    },
    statsCard: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        width: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginLeft:20
    },
    statsValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statsLabel: {
        fontSize: 14,
        color: '#777777',
    },
    galleryContainer: {
        marginBottom: 20,
        marginLeft:20
    },
    galleryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    galleryGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'spaceAround',
        
    },
    galleryImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
        marginLeft:10
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'spaceAround',
        marginBottom:20
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:35,
        marginTop:35
    },
    buttonText: {
      
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AppPro;
// Jitendra Gupta code.
