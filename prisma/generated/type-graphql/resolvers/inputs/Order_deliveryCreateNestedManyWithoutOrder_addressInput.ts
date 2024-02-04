import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrder_addressInputEnvelope } from "../inputs/Order_deliveryCreateManyOrder_addressInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutOrder_addressInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrder_addressInput";
import { Order_deliveryCreateWithoutOrder_addressInput } from "../inputs/Order_deliveryCreateWithoutOrder_addressInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateNestedManyWithoutOrder_addressInput", {})
export class Order_deliveryCreateNestedManyWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutOrder_addressInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutOrder_addressInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyOrder_addressInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyOrder_addressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput[] | undefined;
}
