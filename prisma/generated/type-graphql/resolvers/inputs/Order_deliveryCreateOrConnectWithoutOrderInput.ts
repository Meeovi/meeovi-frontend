import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutOrderInput } from "../inputs/Order_deliveryCreateWithoutOrderInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateOrConnectWithoutOrderInput", {})
export class Order_deliveryCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutOrderInput;
}
