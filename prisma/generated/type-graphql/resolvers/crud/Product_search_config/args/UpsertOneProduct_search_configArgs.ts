import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configCreateInput } from "../../../inputs/Product_search_configCreateInput";
import { Product_search_configUpdateInput } from "../../../inputs/Product_search_configUpdateInput";
import { Product_search_configWhereUniqueInput } from "../../../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_configCreateInput, {
    nullable: false
  })
  create!: Product_search_configCreateInput;

  @TypeGraphQL.Field(_type => Product_search_configUpdateInput, {
    nullable: false
  })
  update!: Product_search_configUpdateInput;
}
