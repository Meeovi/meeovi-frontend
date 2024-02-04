import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagOrderByWithAggregationInput } from "../../../inputs/Category_tagOrderByWithAggregationInput";
import { Category_tagScalarWhereWithAggregatesInput } from "../../../inputs/Category_tagScalarWhereWithAggregatesInput";
import { Category_tagWhereInput } from "../../../inputs/Category_tagWhereInput";
import { Category_tagScalarFieldEnum } from "../../../../enums/Category_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategory_tagArgs {
  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  where?: Category_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Category_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Category_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"category_id" | "category_version_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Category_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Category_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
