import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutDocument_typeNestedInput } from "../inputs/DocumentUpdateManyWithoutDocument_typeNestedInput";
import { Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput } from "../inputs/Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput";
import { Document_type_translationUpdateManyWithoutDocument_typeNestedInput } from "../inputs/Document_type_translationUpdateManyWithoutDocument_typeNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Document_typeUpdateWithoutDocument_base_configInput", {})
export class Document_typeUpdateWithoutDocument_base_configInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  technical_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateManyWithoutDocument_typeNestedInput, {
    nullable: true
  })
  document?: DocumentUpdateManyWithoutDocument_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelUpdateManyWithoutDocument_typeNestedInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateManyWithoutDocument_typeNestedInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationUpdateManyWithoutDocument_typeNestedInput | undefined;
}
