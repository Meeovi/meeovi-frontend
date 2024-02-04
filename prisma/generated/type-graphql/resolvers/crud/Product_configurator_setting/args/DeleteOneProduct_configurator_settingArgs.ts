import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingWhereUniqueInput } from "../../../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;
}
