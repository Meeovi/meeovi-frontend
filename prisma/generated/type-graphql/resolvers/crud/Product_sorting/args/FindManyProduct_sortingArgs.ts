import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_sortingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_sortingOrderByWithRelationAndSearchRelevanceInput";
import { Product_sortingWhereInput } from "../../../inputs/Product_sortingWhereInput";
import { Product_sortingWhereUniqueInput } from "../../../inputs/Product_sortingWhereUniqueInput";
import { Product_sortingScalarFieldEnum } from "../../../../enums/Product_sortingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyProduct_sortingArgs {
  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  where?: Product_sortingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_sortingOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_sortingWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_sortingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_sortingScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "url_key" | "priority" | "active" | "fields" | "created_at" | "locked" | "updated_at"> | undefined;
}
