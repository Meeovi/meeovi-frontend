import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingUpdateWithoutProductInput } from "../inputs/Product_configurator_settingUpdateWithoutProductInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput", {})
export class Product_configurator_settingUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateWithoutProductInput, {
    nullable: false
  })
  data!: Product_configurator_settingUpdateWithoutProductInput;
}
