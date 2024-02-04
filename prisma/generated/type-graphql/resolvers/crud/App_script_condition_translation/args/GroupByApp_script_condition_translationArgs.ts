import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationOrderByWithAggregationInput } from "../../../inputs/App_script_condition_translationOrderByWithAggregationInput";
import { App_script_condition_translationScalarWhereWithAggregatesInput } from "../../../inputs/App_script_condition_translationScalarWhereWithAggregatesInput";
import { App_script_condition_translationWhereInput } from "../../../inputs/App_script_condition_translationWhereInput";
import { App_script_condition_translationScalarFieldEnum } from "../../../../enums/App_script_condition_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  where?: App_script_condition_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_script_condition_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"app_script_condition_id" | "language_id" | "name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_script_condition_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_script_condition_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
