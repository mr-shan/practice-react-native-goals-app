import { Pressable, View, Text, StyleSheet } from 'react-native';

interface IProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'default' | 'danger' | 'text';
  disabled?: boolean;
  onPress?: () => void;
}

const Button = (props: IProps) => {
  const size = props.size || 'medium';
  const variant = props.variant || 'default';

  let viewStyle = {},
    textStyle = {};

  switch (size) {
    case 'small':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.smallText };
      break;
    case 'medium':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.mediumText };
      break;
    case 'large':
      viewStyle = styles.view;
      textStyle = { ...styles.text, ...styles.largeText };
      break;
  }

  switch (variant) {
    case 'default':
      viewStyle = { ...viewStyle, ...styles.defaultView };
      textStyle = { ...textStyle, ...styles.defaultText };
      break;
    case 'primary':
      viewStyle = { ...viewStyle, ...styles.primaryView };
      textStyle = { ...textStyle, ...styles.primaryText };
      break;
    case 'danger':
      viewStyle = { ...viewStyle, ...styles.dangerView };
      textStyle = { ...textStyle, ...styles.dangerText };
      break;
    case 'text':
      viewStyle = { ...viewStyle };
      textStyle = { ...textStyle, ...styles.textText };
      break;
  }

  return (
    <View style={{ ...viewStyle, opacity: props.disabled ? 0.5 : 1 }}>
      <Pressable
        onPress={props.onPress}
        android_ripple={variant === 'text' ? {} : styles.pressable_ripple}
        disabled={props.disabled}
        style={(props) => props.pressed && styles.pressable_ios}
      >
        <Text style={textStyle}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  view: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  primaryView: {
    backgroundColor: 'royalblue',
  },
  defaultView: {
    backgroundColor: 'white',
    borderColor: 'royalblue',
    borderWidth: 2,
  },
  dangerView: {
    backgroundColor: '#fe4444',
  },
  pressable_ios: {
    opacity: 0.5,
  },
  pressable_ripple: { color: '#8aa6fa' },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  primaryText: {
    color: 'white',
  },
  defaultText: {
    color: 'royalblue',
  },
  dangerText: {
    color: 'white',
  },
  textText: {
    color: 'royalblue',
  },
  smallText: {
    fontSize: 12,
    padding: 8,
  },
  mediumText: {
    fontSize: 16,
    padding: 12,
  },
  largeText: {
    fontSize: 22,
    padding: 18,
  },
});
