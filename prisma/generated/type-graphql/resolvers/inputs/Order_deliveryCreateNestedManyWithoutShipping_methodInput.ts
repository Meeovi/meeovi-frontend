import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyShipping_methodInputEnvelope } from "../inputs/Order_deliveryCreateManyShipping_methodInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateOrConnectWithoutShipping_methodInput";
import { Order_deliveryCreateWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateWithoutShipping_methodInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateNestedManyWithoutShipping_methodInput", {})
export class Order_deliveryCreateNestedManyWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutShipping_methodInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutShipping_methodInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyShipping_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyShipping_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput[] | undefined;
}
