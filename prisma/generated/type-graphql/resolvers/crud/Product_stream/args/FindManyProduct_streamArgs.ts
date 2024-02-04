import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { Product_streamWhereInput } from "../../../inputs/Product_streamWhereInput";
import { Product_streamWhereUniqueInput } from "../../../inputs/Product_streamWhereUniqueInput";
import { Product_streamScalarFieldEnum } from "../../../../enums/Product_streamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_streamArgs {
  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  where?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_streamOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_streamOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_streamScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "api_filter" | "invalid" | "created_at" | "updated_at"> | undefined;
}
