import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import PropTypes from "prop-types";

const OTPInputView = ({
  code = "",
  style,
  pinCount = 4,
  autoFocusOnLoad = false,
  onCodeFilled,
  accessibilityLabel = "One-time passcode input",
  resendCodeButtonLabel = "Resend Code",
  onResendCode,
  secureTextEntry = false,
  fieldProps = {}, // Default props for field customization
  ...otherProps
}) => {
  const [fields, setFields] = useState(Array(pinCount).fill(""));
  const ref = useRef(Array(pinCount).fill(null)); // Array of refs for each field

  const handleFieldChange = (text, index) => {
    const newFields = [...fields];
    newFields[index] = text;
    setFields(newFields);

    if (text.length === 1 && index < pinCount - 1) {
      ref.current[index + 1]?.focus(); // Focus the next field
    } else if (text.length === 0) { // Handle backspace to go back to previous field
      ref.current[index - 1]?.focus();
    }

    if (newFields.every((field) => field.length > 0)) {
      onCodeFilled?.(newFields.join(""));
    }
  };

  const handleResendCode = () => {
    onResendCode?.();
  };

  const renderFields = () => {
    return fields.map((field, index) => (
      <TextInput
        key={index}
        ref={(el) => (ref.current[index] = el)} // Assign ref to each element
        value={field}
        onChangeText={(text) => handleFieldChange(text, index)}
        keyboardType="numeric"
        maxLength={1}
        secureTextEntry={secureTextEntry}
        style={[styles.field, style?.field, ...(otherProps.field ?? [])]} // Combine styles with optional defaults
        {...(fieldProps ?? {})} // Spread fieldProps if provided
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
  fieldProps: PropTypes.object, // Props for field customization
  otherProps: PropTypes.object, // Allow for additional props
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  field: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    textAlign: "center",
    fontSize: 16,
  },
  resendButton: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: "#eee",
  },
  resendButtonText: {
    color: "#333",
    fontSize: 14,
  },
});

export default OTPInputView;
