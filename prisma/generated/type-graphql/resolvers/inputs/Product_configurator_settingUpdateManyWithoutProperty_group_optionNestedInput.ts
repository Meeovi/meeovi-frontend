import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyProperty_group_optionInputEnvelope } from "../inputs/Product_configurator_settingCreateManyProperty_group_optionInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput";
import { Product_configurator_settingCreateWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingCreateWithoutProperty_group_optionInput";
import { Product_configurator_settingScalarWhereInput } from "../inputs/Product_configurator_settingScalarWhereInput";
import { Product_configurator_settingUpdateManyWithWhereWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingUpdateManyWithWhereWithoutProperty_group_optionInput";
import { Product_configurator_settingUpdateWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingUpdateWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateManyWithoutProperty_group_optionNestedInput", {})
export class Product_configurator_settingUpdateManyWithoutProperty_group_optionNestedInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutProperty_group_optionInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  upsert?: Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyProperty_group_optionInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyProperty_group_optionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateWithWhereUniqueWithoutProperty_group_optionInput], {
    nullable: true
  })
  update?: Product_configurator_settingUpdateWithWhereUniqueWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingUpdateManyWithWhereWithoutProperty_group_optionInput], {
    nullable: true
  })
  updateMany?: Product_configurator_settingUpdateManyWithWhereWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Product_configurator_settingScalarWhereInput[] | undefined;
}
