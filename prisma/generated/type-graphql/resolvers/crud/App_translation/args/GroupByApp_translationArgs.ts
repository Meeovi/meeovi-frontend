import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationOrderByWithAggregationInput } from "../../../inputs/App_translationOrderByWithAggregationInput";
import { App_translationScalarWhereWithAggregatesInput } from "../../../inputs/App_translationScalarWhereWithAggregatesInput";
import { App_translationWhereInput } from "../../../inputs/App_translationWhereInput";
import { App_translationScalarFieldEnum } from "../../../../enums/App_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  where?: App_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"app_id" | "language_id" | "label" | "description" | "privacy_policy_extensions" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
