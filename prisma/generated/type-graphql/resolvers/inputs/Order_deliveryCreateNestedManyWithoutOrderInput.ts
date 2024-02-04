import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrderInputEnvelope } from "../inputs/Order_deliveryCreateManyOrderInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutOrderInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrderInput";
import { Order_deliveryCreateWithoutOrderInput } from "../inputs/Order_deliveryCreateWithoutOrderInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryCreateNestedManyWithoutOrderInput", {})
export class Order_deliveryCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput[] | undefined;
}
