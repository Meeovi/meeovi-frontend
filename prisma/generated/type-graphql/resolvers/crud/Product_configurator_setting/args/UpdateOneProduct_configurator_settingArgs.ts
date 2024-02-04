import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingUpdateInput } from "../../../inputs/Product_configurator_settingUpdateInput";
import { Product_configurator_settingWhereUniqueInput } from "../../../inputs/Product_configurator_settingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateInput, {
    nullable: false
  })
  data!: Product_configurator_settingUpdateInput;

  @TypeGraphQL.Field(_type => Product_configurator_settingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_configurator_settingWhereUniqueInput;
}
