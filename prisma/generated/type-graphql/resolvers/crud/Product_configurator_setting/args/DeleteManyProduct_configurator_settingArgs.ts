import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingWhereInput } from "../../../inputs/Product_configurator_settingWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingWhereInput, {
    nullable: true
  })
  where?: Product_configurator_settingWhereInput | undefined;
}
