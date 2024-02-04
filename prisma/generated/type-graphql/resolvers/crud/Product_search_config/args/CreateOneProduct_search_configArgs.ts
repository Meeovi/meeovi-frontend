import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configCreateInput } from "../../../inputs/Product_search_configCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configCreateInput, {
    nullable: false
  })
  data!: Product_search_configCreateInput;
}
