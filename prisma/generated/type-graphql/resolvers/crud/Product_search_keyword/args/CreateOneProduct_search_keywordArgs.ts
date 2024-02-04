import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordCreateInput } from "../../../inputs/Product_search_keywordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordCreateInput, {
    nullable: false
  })
  data!: Product_search_keywordCreateInput;
}
