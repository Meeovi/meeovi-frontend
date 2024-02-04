import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Import_export_fileUpdateOneWithoutImport_export_logNestedInput } from "../inputs/Import_export_fileUpdateOneWithoutImport_export_logNestedInput";
import { Import_export_logUpdateManyWithoutImport_export_logNestedInput } from "../inputs/Import_export_logUpdateManyWithoutImport_export_logNestedInput";
import { Import_export_logUpdateOneWithoutOther_import_export_logNestedInput } from "../inputs/Import_export_logUpdateOneWithoutOther_import_export_logNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutImport_export_logNestedInput } from "../inputs/UserUpdateOneWithoutImport_export_logNestedInput";

@TypeGraphQL.InputType("Import_export_logUpdateWithoutImport_export_profileInput", {})
export class Import_export_logUpdateWithoutImport_export_profileInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  activity?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  state?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  records?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  profile_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  result?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileUpdateOneWithoutImport_export_logNestedInput, {
    nullable: true
  })
  import_export_file?: Import_export_fileUpdateOneWithoutImport_export_logNestedInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logUpdateOneWithoutOther_import_export_logNestedInput, {
    nullable: true
  })
  import_export_log?: Import_export_logUpdateOneWithoutOther_import_export_logNestedInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_logUpdateManyWithoutImport_export_logNestedInput, {
    nullable: true
  })
  other_import_export_log?: Import_export_logUpdateManyWithoutImport_export_logNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutImport_export_logNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneWithoutImport_export_logNestedInput | undefined;
}
