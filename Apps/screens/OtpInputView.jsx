import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'; // For prop type validation (optional)

const OTPInputView = ({
  code = '',
  style,
  pinCount = 4,
  autoFocusOnLoad = false,
  onCodeFilled,
  accessibilityLabel = 'One-time passcode input',
  resendCodeButtonLabel = 'Resend Code',
  onResendCode,
  secureTextEntry = false, // Optional for password masking
  ...otherProps // For future customization
}) => {
  const [fields, setFields] = useState(Array(pinCount).fill(''));
  const ref = useRef(React.createRef()); // Initialize ref outside conditional

  const handleFieldChange = (text, index) => {
    const newFields = [...fields];
    newFields[index] = text;
    setFields(newFields);

    // Move focus to the next field if the current field is filled
    if (text.length === 1 && index < pinCount - 1) {
      ref.current?.children[index + 1]?.focus(); // Use nullish coalescing for ref access
    }

    // Check if all fields are filled and call onCodeFilled
    if (newFields.every(field => field.length > 0)) {
      onCodeFilled?.(newFields.join('')); // Call only if onCodeFilled exists
    }
  };

  const handleResendCode = () => {
    onResendCode?.(); // Call only if onResendCode exists
  };

  const renderFields = () => {
    return fields.map((field, index) => (
      <TextInput
        key={index}
        ref={ref.current?.children?.[index] ?? React.createRef()} // Use nullish coalescing for ref access
        value={field}
        onChangeText={text => handleFieldChange(text, index)}
        keyboardType="numeric" // Set keyboard type for numbers
        maxLength={1} // Limit input to one character
        secureTextEntry={secureTextEntry} // Optional for password masking
        style={[styles.field, style?.field]} // Combine component and custom styles
        {...otherProps?.field} // Only spread if otherProps.field exists
        {...fieldProps} // Optional props for field customization
        
      />
    ));
  };

  return (
    <View style={[styles.container, style]}>
      {renderFields()}
      {onResendCode && (
        <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
          <Text style={styles.resendButtonText}>{resendCodeButtonLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

OTPInputView.propTypes = {
  code: PropTypes.string,
  style: PropTypes.object,
  pinCount: PropTypes.number.isRequired,
  autoFocusOnLoad: PropTypes.bool,
  onCodeFilled: PropTypes.func,
  accessibilityLabel: PropTypes.string,
  resendCodeButtonLabel: PropTypes.string,
  onResendCode: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  // Add more prop types for future customization
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  field: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 16,
  },
  resendButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  resendButtonText: {
    color: '#333',
    fontSize: 14,
  },
});

export default OTPInputView;
