import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutOrder_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutOrder_tagNestedInput";

@TypeGraphQL.InputType("Order_tagUpdateWithoutOrderInput", {})
export class Order_tagUpdateWithoutOrderInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutOrder_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutOrder_tagNestedInput | undefined;
}
