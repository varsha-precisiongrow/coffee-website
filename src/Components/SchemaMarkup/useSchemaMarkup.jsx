import { useEffect } from "react";

import { GenerateSchema } from "./GenerateSchema";

const useSchemaMarkup = (schemaType, schemaData) => {

  useEffect(() => {

    if (!schemaType) return;

    const schema = GenerateSchema(
      schemaType,
      schemaData
    );

    if (!schema) return;

    // ✅ Remove old schema
    const oldSchema =
      document.getElementById("schema-markup");

    if (oldSchema) {
      oldSchema.remove();
    }

    // ✅ Create new schema script
    const script = document.createElement("script");

    script.type = "application/ld+json";

    script.id = "schema-markup";

    script.innerHTML = JSON.stringify(schema);

    document.head.appendChild(script);

    return () => {
      script.remove();
    };

  }, [schemaType, schemaData]);

};

export default useSchemaMarkup;