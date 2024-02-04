import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagOrderByWithAggregationInput } from "../../../inputs/Landing_page_tagOrderByWithAggregationInput";
import { Landing_page_tagScalarWhereWithAggregatesInput } from "../../../inputs/Landing_page_tagScalarWhereWithAggregatesInput";
import { Landing_page_tagWhereInput } from "../../../inputs/Landing_page_tagWhereInput";
import { Landing_page_tagScalarFieldEnum } from "../../../../enums/Landing_page_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  where?: Landing_page_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Landing_page_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"landing_page_id" | "landing_page_version_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Landing_page_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Landing_page_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
