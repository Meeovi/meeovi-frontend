import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyOrderInputEnvelope } from "../inputs/Order_transactionCreateManyOrderInputEnvelope";
import { Order_transactionCreateOrConnectWithoutOrderInput } from "../inputs/Order_transactionCreateOrConnectWithoutOrderInput";
import { Order_transactionCreateWithoutOrderInput } from "../inputs/Order_transactionCreateWithoutOrderInput";
import { Order_transactionScalarWhereInput } from "../inputs/Order_transactionScalarWhereInput";
import { Order_transactionUpdateManyWithWhereWithoutOrderInput } from "../inputs/Order_transactionUpdateManyWithWhereWithoutOrderInput";
import { Order_transactionUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/Order_transactionUpdateWithWhereUniqueWithoutOrderInput";
import { Order_transactionUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/Order_transactionUpsertWithWhereUniqueWithoutOrderInput";
import { Order_transactionWhereUniqueInput } from "../inputs/Order_transactionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transactionUpdateManyWithoutOrderNestedInput", {})
export class Order_transactionUpdateManyWithoutOrderNestedInput {
  @TypeGraphQL.Field(_type => [Order_transactionCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_transactionCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_transactionCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: Order_transactionUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transactionCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_transactionCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  set?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_transactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: Order_transactionUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: Order_transactionUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_transactionScalarWhereInput[] | undefined;
}
