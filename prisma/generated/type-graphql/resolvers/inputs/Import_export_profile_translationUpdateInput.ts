import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Import_export_profileUpdateOneRequiredWithoutImport_export_profile_translationNestedInput } from "../inputs/Import_export_profileUpdateOneRequiredWithoutImport_export_profile_translationNestedInput";
import { LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpdateInput", {})
export class Import_export_profile_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileUpdateOneRequiredWithoutImport_export_profile_translationNestedInput, {
    nullable: true
  })
  import_export_profile?: Import_export_profileUpdateOneRequiredWithoutImport_export_profile_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput | undefined;
}
