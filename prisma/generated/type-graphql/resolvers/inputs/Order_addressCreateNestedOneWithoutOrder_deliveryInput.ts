import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateOrConnectWithoutOrder_deliveryInput";
import { Order_addressCreateWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateWithoutOrder_deliveryInput";
import { Order_addressWhereUniqueInput } from "../inputs/Order_addressWhereUniqueInput";

@TypeGraphQL.InputType("Order_addressCreateNestedOneWithoutOrder_deliveryInput", {})
export class Order_addressCreateNestedOneWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrder_deliveryInput, {
    nullable: true
  })
  create?: Order_addressCreateWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressCreateOrConnectWithoutOrder_deliveryInput, {
    nullable: true
  })
  connectOrCreate?: Order_addressCreateOrConnectWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: true
  })
  connect?: Order_addressWhereUniqueInput | undefined;
}
