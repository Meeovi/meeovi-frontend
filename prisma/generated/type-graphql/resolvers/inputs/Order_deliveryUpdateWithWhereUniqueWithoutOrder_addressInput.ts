import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryUpdateWithoutOrder_addressInput } from "../inputs/Order_deliveryUpdateWithoutOrder_addressInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput", {})
export class Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateWithoutOrder_addressInput;
}
