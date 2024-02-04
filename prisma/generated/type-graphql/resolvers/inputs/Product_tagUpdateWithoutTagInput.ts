import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_tagNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_tagNestedInput";

@TypeGraphQL.InputType("Product_tagUpdateWithoutTagInput", {})
export class Product_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_tagNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_tagNestedInput | undefined;
}
