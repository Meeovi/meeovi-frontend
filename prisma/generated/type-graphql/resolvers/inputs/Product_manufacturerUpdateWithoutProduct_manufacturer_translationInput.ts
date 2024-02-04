import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutProduct_manufacturerNestedInput } from "../inputs/MediaUpdateOneWithoutProduct_manufacturerNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutProduct_manufacturerNestedInput } from "../inputs/ProductUpdateManyWithoutProduct_manufacturerNestedInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput", {})
export class Product_manufacturerUpdateWithoutProduct_manufacturer_translationInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  link?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutProduct_manufacturerNestedInput, {
    nullable: true
  })
  product?: ProductUpdateManyWithoutProduct_manufacturerNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutProduct_manufacturerNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutProduct_manufacturerNestedInput | undefined;
}
