import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_config_fieldCreateInput } from "../../../inputs/Product_search_config_fieldCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_search_config_fieldArgs {
  @TypeGraphQL.Field(_type => Product_search_config_fieldCreateInput, {
    nullable: false
  })
  data!: Product_search_config_fieldCreateInput;
}
