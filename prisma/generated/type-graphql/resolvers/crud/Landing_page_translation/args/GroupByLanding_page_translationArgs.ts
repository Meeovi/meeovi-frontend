import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationOrderByWithAggregationInput } from "../../../inputs/Landing_page_translationOrderByWithAggregationInput";
import { Landing_page_translationScalarWhereWithAggregatesInput } from "../../../inputs/Landing_page_translationScalarWhereWithAggregatesInput";
import { Landing_page_translationWhereInput } from "../../../inputs/Landing_page_translationWhereInput";
import { Landing_page_translationScalarFieldEnum } from "../../../../enums/Landing_page_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  where?: Landing_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Landing_page_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"landing_page_id" | "landing_page_version_id" | "language_id" | "name" | "url" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "slot_config" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Landing_page_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Landing_page_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
