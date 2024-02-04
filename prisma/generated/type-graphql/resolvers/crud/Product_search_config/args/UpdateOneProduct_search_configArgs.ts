import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_configUpdateInput } from "../../../inputs/Product_search_configUpdateInput";
import { Product_search_configWhereUniqueInput } from "../../../inputs/Product_search_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_search_configArgs {
  @TypeGraphQL.Field(_type => Product_search_configUpdateInput, {
    nullable: false
  })
  data!: Product_search_configUpdateInput;

  @TypeGraphQL.Field(_type => Product_search_configWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_configWhereUniqueInput;
}
