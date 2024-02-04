import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput";
import { Product_cross_selling_translationUpdateManyWithoutProduct_cross_sellingNestedInput } from "../inputs/Product_cross_selling_translationUpdateManyWithoutProduct_cross_sellingNestedInput";
import { Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput } from "../inputs/Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput", {})
export class Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sort_by?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sort_direction?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  limit?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_cross_sellingNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput, {
    nullable: true
  })
  product_stream?: Product_streamUpdateOneWithoutProduct_cross_sellingNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateManyWithoutProduct_cross_sellingNestedInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationUpdateManyWithoutProduct_cross_sellingNestedInput | undefined;
}
