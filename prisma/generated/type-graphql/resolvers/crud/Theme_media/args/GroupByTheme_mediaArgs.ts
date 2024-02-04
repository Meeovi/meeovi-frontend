import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaOrderByWithAggregationInput } from "../../../inputs/Theme_mediaOrderByWithAggregationInput";
import { Theme_mediaScalarWhereWithAggregatesInput } from "../../../inputs/Theme_mediaScalarWhereWithAggregatesInput";
import { Theme_mediaWhereInput } from "../../../inputs/Theme_mediaWhereInput";
import { Theme_mediaScalarFieldEnum } from "../../../../enums/Theme_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaWhereInput, {
    nullable: true
  })
  where?: Theme_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_mediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Theme_mediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Theme_mediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"theme_id" | "media_id">;

  @TypeGraphQL.Field(_type => Theme_mediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Theme_mediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
