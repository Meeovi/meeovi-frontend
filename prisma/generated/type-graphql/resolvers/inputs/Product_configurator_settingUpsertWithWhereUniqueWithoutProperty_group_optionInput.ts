import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingCreateWithoutProperty_group_optionInput";
import { Product_configurator_settingUpdateWithoutProperty_group_optionInput } from "../inputs/Product_configurator_settingUpdateWithoutProperty_group_optionInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput", {})
export class Product_configurator_settingUpsertWithWhereUniqueWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateWithoutProperty_group_optionInput, {
    nullable: false
  })
  update!: Product_configurator_settingUpdateWithoutProperty_group_optionInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateWithoutProperty_group_optionInput, {
    nullable: false
  })
  create!: Product_configurator_settingCreateWithoutProperty_group_optionInput;
}
