import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyShipping_methodInputEnvelope } from "../inputs/Order_deliveryCreateManyShipping_methodInputEnvelope";
import { Order_deliveryCreateOrConnectWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateOrConnectWithoutShipping_methodInput";
import { Order_deliveryCreateWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateWithoutShipping_methodInput";
import { Order_deliveryScalarWhereInput } from "../inputs/Order_deliveryScalarWhereInput";
import { Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput } from "../inputs/Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput";
import { Order_deliveryUpdateWithWhereUniqueWithoutShipping_methodInput } from "../inputs/Order_deliveryUpdateWithWhereUniqueWithoutShipping_methodInput";
import { Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput } from "../inputs/Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpdateManyWithoutShipping_methodNestedInput", {})
export class Order_deliveryUpdateManyWithoutShipping_methodNestedInput {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateWithoutShipping_methodInput], {
    nullable: true
  })
  create?: Order_deliveryCreateWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryCreateOrConnectWithoutShipping_methodInput], {
    nullable: true
  })
  connectOrCreate?: Order_deliveryCreateOrConnectWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput], {
    nullable: true
  })
  upsert?: Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryCreateManyShipping_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Order_deliveryCreateManyShipping_methodInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateWithWhereUniqueWithoutShipping_methodInput], {
    nullable: true
  })
  update?: Order_deliveryUpdateWithWhereUniqueWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput], {
    nullable: true
  })
  updateMany?: Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_deliveryScalarWhereInput[] | undefined;
}
