import { View, StyleSheet, Image, Text, Font } from '@react-pdf/renderer';
import NormalTypewriter from '../../fonts/jmh-typewriter.regular.ttf';
import BoldTypeWriter from '../../fonts/jmh-typewriter.bold.ttf';

Font.register({
  family: 'Typewriter',
  fonts: [
    {
      src: NormalTypewriter,
      fontWeight: 'bold',
    },
  ],
});

Font.register({
  family: 'BoldTypeWriter',
  fonts: [
    {
      src: BoldTypeWriter,
      fontWeight: 'bold',
    },
  ],
});

const style = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'right',
    fontFamily: 'BoldTypeWriter',
    fontWeight: 'bold',
  },
  image: {
    height: 65,
    width: 75,
    objectPosition: 'left top',
    position: 'absolute',
  },
});
export const Header = () => {
  return (
    <View style={{ marginBottom: 40 }}>
      <Text style={style.header}>Receipt</Text>
      <Image style={style.image} src="/my-logo.jpg" />
    </View>
  );
};
