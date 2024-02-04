import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyLanguageInputEnvelope } from "../inputs/OrderCreateManyLanguageInputEnvelope";
import { OrderCreateOrConnectWithoutLanguageInput } from "../inputs/OrderCreateOrConnectWithoutLanguageInput";
import { OrderCreateWithoutLanguageInput } from "../inputs/OrderCreateWithoutLanguageInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutLanguageInput } from "../inputs/OrderUpdateManyWithWhereWithoutLanguageInput";
import { OrderUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutLanguageInput";
import { OrderUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutLanguageInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutLanguageNestedInput", {})
export class OrderUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: OrderCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
