import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingCreateInput } from "../../../inputs/Product_configurator_settingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingCreateInput, {
    nullable: false
  })
  data!: Product_configurator_settingCreateInput;
}
