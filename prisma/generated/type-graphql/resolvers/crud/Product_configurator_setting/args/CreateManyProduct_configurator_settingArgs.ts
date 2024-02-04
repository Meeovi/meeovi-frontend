import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_configurator_settingCreateManyInput } from "../../../inputs/Product_configurator_settingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProduct_configurator_settingArgs {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateManyInput], {
    nullable: false
  })
  data!: Product_configurator_settingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
