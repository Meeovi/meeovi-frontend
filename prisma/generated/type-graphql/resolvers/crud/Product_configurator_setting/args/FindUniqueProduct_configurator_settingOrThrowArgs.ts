import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingWhereUniqueInput } from "../../../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_configurator_settingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;
}
