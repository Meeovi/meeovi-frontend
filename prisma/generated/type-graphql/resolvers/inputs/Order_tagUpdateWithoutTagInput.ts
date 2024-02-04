import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateOneRequiredWithoutOrder_tagNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutOrder_tagNestedInput";

@TypeGraphQL.InputType("Order_tagUpdateWithoutTagInput", {})
export class Order_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrder_tagNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutOrder_tagNestedInput | undefined;
}
