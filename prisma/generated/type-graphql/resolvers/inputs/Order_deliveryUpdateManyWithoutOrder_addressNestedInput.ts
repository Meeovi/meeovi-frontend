import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrder_addressInputEnvelope } from "../inputs/Order_deliveryCreateManyOrder_addressInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutOrder_addressInput } from "../inputs/Order_deliveryCreateOrConnectWithoutOrder_addressInput";
import { Order_deliveryCreateWithoutOrder_addressInput } from "../inputs/Order_deliveryCreateWithoutOrder_addressInput";
import { Order_deliveryScalarWhereInput } from "../inputs/Order_deliveryScalarWhereInput";
import { Order_deliveryUpdateManyWithWhereWithoutOrder_addressInput } from "../inputs/Order_deliveryUpdateManyWithWhereWithoutOrder_addressInput";
import { Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput } from "../inputs/Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput";
import { Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput } from "../inputs/Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateManyWithoutOrder_addressNestedInput", {})
export class Order_deliveryUpdateManyWithoutOrder_addressNestedInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutOrder_addressInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutOrder_addressInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput], {
    nullable: true
  })
  upsert?: Order_deliveryUpsertWithWhereUniqueWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyOrder_addressInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyOrder_addressInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  set?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_deliveryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput], {
    nullable: true
  })
  update?: Order_deliveryUpdateWithWhereUniqueWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateManyWithWhereWithoutOrder_addressInput], {
    nullable: true
  })
  updateMany?: Order_deliveryUpdateManyWithWhereWithoutOrder_addressInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_deliveryScalarWhereInput[] | undefined;
}
