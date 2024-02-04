import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutDocumentNestedInput } from "../inputs/DocumentUpdateManyWithoutDocumentNestedInput";
import { DocumentUpdateOneWithoutOther_documentNestedInput } from "../inputs/DocumentUpdateOneWithoutOther_documentNestedInput";
import { MediaUpdateOneWithoutDocumentNestedInput } from "../inputs/MediaUpdateOneWithoutDocumentNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutDocumentNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutDocumentNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("DocumentUpdateWithoutDocument_typeInput", {})
export class DocumentUpdateWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  file_type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  sent?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  static?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  deep_link_code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

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
  document_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutDocumentNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutDocumentNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutDocumentNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutDocumentNestedInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateOneWithoutOther_documentNestedInput, {
    nullable: true
  })
  document?: DocumentUpdateOneWithoutOther_documentNestedInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateManyWithoutDocumentNestedInput, {
    nullable: true
  })
  other_document?: DocumentUpdateManyWithoutDocumentNestedInput | undefined;
}
