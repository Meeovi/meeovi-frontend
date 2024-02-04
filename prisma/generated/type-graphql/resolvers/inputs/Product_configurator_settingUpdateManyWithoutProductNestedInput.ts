import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyProductInputEnvelope } from "../inputs/Product_configurator_settingCreateManyProductInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutProductInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutProductInput";
import { Product_configurator_settingCreateWithoutProductInput } from "../inputs/Product_configurator_settingCreateWithoutProductInput";
import { Product_configurator_settingScalarWhereInput } from "../inputs/Product_configurator_settingScalarWhereInput";
import { Product_configurator_settingUpdateManyWithWhereWithoutProductInput } from "../inputs/Product_configurator_settingUpdateManyWithWhereWithoutProductInput";
import { Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput";
import { Product_configurator_settingUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Product_configurator_settingUpsertWithWhereUniqueWithoutProductInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateManyWithoutProductNestedInput", {})
export class Product_configurator_settingUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Product_configurator_settingUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  set?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  delete?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_configurator_settingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Product_configurator_settingUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_configurator_settingScalarWhereInput[] | undefined;
}
