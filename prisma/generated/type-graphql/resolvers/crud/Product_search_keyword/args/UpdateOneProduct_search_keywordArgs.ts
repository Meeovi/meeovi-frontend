import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordUpdateInput } from "../../../inputs/Product_search_keywordUpdateInput";
import { Product_search_keywordWhereUniqueInput } from "../../../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordUpdateInput, {
    nullable: false
  })
  data!: Product_search_keywordUpdateInput;

  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;
}
