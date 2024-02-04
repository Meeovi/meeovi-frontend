import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutProduct_manufacturerNestedInput } from "../inputs/ProductUpdateManyWithoutProduct_manufacturerNestedInput";
import { Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput } from "../inputs/Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateWithoutMediaInput", {})
export class Product_manufacturerUpdateWithoutMediaInput {
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

  @TypeGraphQL.Field(_type => Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationUpdateManyWithoutProduct_manufacturerNestedInput | undefined;
}
