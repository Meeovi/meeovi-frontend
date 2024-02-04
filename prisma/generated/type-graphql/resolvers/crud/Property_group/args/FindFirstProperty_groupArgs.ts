import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Property_groupOrderByWithRelationAndSearchRelevanceInput";
import { Property_groupWhereInput } from "../../../inputs/Property_groupWhereInput";
import { Property_groupWhereUniqueInput } from "../../../inputs/Property_groupWhereUniqueInput";
import { Property_groupScalarFieldEnum } from "../../../../enums/Property_groupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupWhereInput, {
    nullable: true
  })
  where?: Property_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_groupOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Property_groupOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Property_groupWhereUniqueInput, {
    nullable: true
  })
  cursor?: Property_groupWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Property_groupScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sorting_type" | "display_type" | "created_at" | "updated_at" | "filterable" | "visible_on_product_detail_page"> | undefined;
}
