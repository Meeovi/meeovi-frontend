import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutOrder_addressInput } from "../inputs/Order_deliveryCreateWithoutOrder_addressInput";
import { Order_deliveryUpdateWithoutOrder_addressInput } from "../inputs/Order_deliveryUpdateWithoutOrder_addressInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput", {})
export class Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  update!: Order_deliveryUpdateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutOrder_addressInput;
}
