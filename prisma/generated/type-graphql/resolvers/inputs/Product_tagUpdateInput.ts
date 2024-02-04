import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_tagNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_tagNestedInput";
import { TagUpdateOneRequiredWithoutProduct_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutProduct_tagNestedInput";

@TypeGraphQL.InputType("Product_tagUpdateInput", {})
export class Product_tagUpdateInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_tagNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutProduct_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutProduct_tagNestedInput | undefined;
}
