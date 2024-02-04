import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingUpdateWithoutMediaInput } from "../inputs/Product_configurator_settingUpdateWithoutMediaInput";
import { Product_configurator_settingWhereUniqueInput } from "../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.InputType("Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput", {})
export class Product_configurator_settingUpdateWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateWithoutMediaInput, {
    nullable: false
  })
  data!: Product_configurator_settingUpdateWithoutMediaInput;
}
