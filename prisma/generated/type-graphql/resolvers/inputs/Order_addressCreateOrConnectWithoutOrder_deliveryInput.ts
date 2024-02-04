import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateWithoutOrder_deliveryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateOrConnectWithoutOrder_deliveryInput", {})
export class Order_addressCreateOrConnectWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Order_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrder_deliveryInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutOrder_deliveryInput;
}
