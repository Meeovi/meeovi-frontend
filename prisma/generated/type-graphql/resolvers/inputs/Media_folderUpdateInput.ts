import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MediaUpdateManyWithoutMedia_folderNestedInput } from "../inputs/MediaUpdateManyWithoutMedia_folderNestedInput";
import { Media_default_folderUpdateOneWithoutMedia_folderNestedInput } from "../inputs/Media_default_folderUpdateOneWithoutMedia_folderNestedInput";
import { Media_folderUpdateManyWithoutMedia_folderNestedInput } from "../inputs/Media_folderUpdateManyWithoutMedia_folderNestedInput";
import { Media_folderUpdateOneWithoutOther_media_folderNestedInput } from "../inputs/Media_folderUpdateOneWithoutOther_media_folderNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Media_folderUpdateInput", {})
export class Media_folderUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  child_count?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  media_folder_configuration_id?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  use_parent_configuration?: NullableBoolFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaUpdateManyWithoutMedia_folderNestedInput, {
    nullable: true
  })
  media?: MediaUpdateManyWithoutMedia_folderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderUpdateOneWithoutMedia_folderNestedInput, {
    nullable: true
  })
  media_default_folder?: Media_default_folderUpdateOneWithoutMedia_folderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateOneWithoutOther_media_folderNestedInput, {
    nullable: true
  })
  media_folder?: Media_folderUpdateOneWithoutOther_media_folderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateManyWithoutMedia_folderNestedInput, {
    nullable: true
  })
  other_media_folder?: Media_folderUpdateManyWithoutMedia_folderNestedInput | undefined;
}
