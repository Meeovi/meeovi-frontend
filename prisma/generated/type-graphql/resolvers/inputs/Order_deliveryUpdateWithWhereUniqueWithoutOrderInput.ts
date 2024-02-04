import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryUpdateWithoutOrderInput } from "../inputs/Order_deliveryUpdateWithoutOrderInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateWithWhereUniqueWithoutOrderInput", {})
export class Order_deliveryUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateWithoutOrderInput;
}
