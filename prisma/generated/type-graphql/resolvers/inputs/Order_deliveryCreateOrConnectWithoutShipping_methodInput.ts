import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateWithoutShipping_methodInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateOrConnectWithoutShipping_methodInput", {})
export class Order_deliveryCreateOrConnectWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutShipping_methodInput;
}
