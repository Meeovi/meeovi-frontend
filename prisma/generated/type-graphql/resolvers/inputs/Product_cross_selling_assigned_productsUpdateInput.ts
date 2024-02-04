import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput";
import { Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput } from "../inputs/Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsUpdateInput", {})
export class Product_cross_selling_assigned_productsUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_cross_selling_assigned_productsNestedInput | undefined;
}
