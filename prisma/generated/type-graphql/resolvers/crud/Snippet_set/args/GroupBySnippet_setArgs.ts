import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setOrderByWithAggregationInput } from "../../../inputs/Snippet_setOrderByWithAggregationInput";
import { Snippet_setScalarWhereWithAggregatesInput } from "../../../inputs/Snippet_setScalarWhereWithAggregatesInput";
import { Snippet_setWhereInput } from "../../../inputs/Snippet_setWhereInput";
import { Snippet_setScalarFieldEnum } from "../../../../enums/Snippet_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setWhereInput, {
    nullable: true
  })
  where?: Snippet_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Snippet_setOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Snippet_setOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Snippet_setScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "base_file" | "iso" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Snippet_setScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Snippet_setScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
