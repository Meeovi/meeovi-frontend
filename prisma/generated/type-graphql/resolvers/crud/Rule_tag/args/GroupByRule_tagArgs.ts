import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Rule_tagOrderByWithAggregationInput } from "../../../inputs/Rule_tagOrderByWithAggregationInput";
import { Rule_tagScalarWhereWithAggregatesInput } from "../../../inputs/Rule_tagScalarWhereWithAggregatesInput";
import { Rule_tagWhereInput } from "../../../inputs/Rule_tagWhereInput";
import { Rule_tagScalarFieldEnum } from "../../../../enums/Rule_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRule_tagArgs {
  @TypeGraphQL.Field(_type => Rule_tagWhereInput, {
    nullable: true
  })
  where?: Rule_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Rule_tagOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Rule_tagOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Rule_tagScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"rule_id" | "tag_id">;

  @TypeGraphQL.Field(_type => Rule_tagScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Rule_tagScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
