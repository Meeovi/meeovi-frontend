import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutProduct_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutProduct_tagNestedInput";

@TypeGraphQL.InputType("Product_tagUpdateWithoutProductInput", {})
export class Product_tagUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutProduct_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutProduct_tagNestedInput | undefined;
}
