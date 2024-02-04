import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_search_keywordUpdateManyMutationInput } from "../../../inputs/Product_search_keywordUpdateManyMutationInput";
import { Product_search_keywordWhereInput } from "../../../inputs/Product_search_keywordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_search_keywordArgs {
  @TypeGraphQL.Field(_type => Product_search_keywordUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_search_keywordUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  where?: Product_search_keywordWhereInput | undefined;
}
