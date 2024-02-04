import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingWhereInput } from "../inputs/Product_configurator_settingWhereInput";

@TypeGraphQL.InputType("Product_configurator_settingListRelationFilter", {})
export class Product_configurator_settingListRelationFilter {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  every?: Product_configurator_settingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  some?: Product_configurator_settingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  none?: Product_configurator_settingWhereInput | undefined;
}
