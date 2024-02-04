import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationOrderByWithAggregationInput } from "../../../inputs/Theme_translationOrderByWithAggregationInput";
import { Theme_translationScalarWhereWithAggregatesInput } from "../../../inputs/Theme_translationScalarWhereWithAggregatesInput";
import { Theme_translationWhereInput } from "../../../inputs/Theme_translationWhereInput";
import { Theme_translationScalarFieldEnum } from "../../../../enums/Theme_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationWhereInput, {
    nullable: true
  })
  where?: Theme_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Theme_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Theme_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"theme_id" | "language_id" | "description" | "labels" | "help_texts" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Theme_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Theme_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
