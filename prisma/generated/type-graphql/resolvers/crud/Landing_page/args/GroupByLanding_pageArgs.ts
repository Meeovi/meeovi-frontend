import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageOrderByWithAggregationInput } from "../../../inputs/Landing_pageOrderByWithAggregationInput";
import { Landing_pageScalarWhereWithAggregatesInput } from "../../../inputs/Landing_pageScalarWhereWithAggregatesInput";
import { Landing_pageWhereInput } from "../../../inputs/Landing_pageWhereInput";
import { Landing_pageScalarFieldEnum } from "../../../../enums/Landing_pageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Landing_pageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "active" | "cms_page_id" | "cms_page_version_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Landing_pageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Landing_pageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
