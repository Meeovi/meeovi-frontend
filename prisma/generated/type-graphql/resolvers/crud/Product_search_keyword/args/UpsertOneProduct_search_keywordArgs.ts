import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordCreateInput } from "../../../inputs/Product_search_keywordCreateInput";
import { Product_search_keywordUpdateInput } from "../../../inputs/Product_search_keywordUpdateInput";
import { Product_search_keywordWhereUniqueInput } from "../../../inputs/Product_search_keywordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereUniqueInput, {
    nullable: false
  })
  where!: Product_search_keywordWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateInput, {
    nullable: false
  })
  create!: Product_search_keywordCreateInput;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateInput, {
    nullable: false
  })
  update!: Product_search_keywordUpdateInput;
}
