import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyProperty_group_optionInputEnvelope } from "../inputs/Product_configurator_settingCreateManyProperty_group_optionInputEnvelope";
import { Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput";
import { Product_configurator_settingCreateWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingCreateWithoutProperty_group_optionInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateNestedManyWithoutProperty_group_optionInput", {})
export class Product_configurator_settingCreateNestedManyWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateWithoutProperty_group_optionInput], {
    nullable: true
  })
  create?: Product_configurator_settingCreateWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput], {
    nullable: true
  })
  connectOrCreate?: Product_configurator_settingCreateOrConnectWithoutProperty_group_optionInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateManyProperty_group_optionInputEnvelope, {
    nullable: true
  })
  createMany?: Product_configurator_settingCreateManyProperty_group_optionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_configurator_settingWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_configurator_settingWhereUniqueInput[] | undefined;
}
