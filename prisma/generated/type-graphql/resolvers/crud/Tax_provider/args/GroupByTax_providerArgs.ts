import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerOrderByWithAggregationInput } from "../../../inputs/Tax_providerOrderByWithAggregationInput";
import { Tax_providerScalarWhereWithAggregatesInput } from "../../../inputs/Tax_providerScalarWhereWithAggregatesInput";
import { Tax_providerWhereInput } from "../../../inputs/Tax_providerWhereInput";
import { Tax_providerScalarFieldEnum } from "../../../../enums/Tax_providerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerWhereInput, {
    nullable: true
  })
  where?: Tax_providerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_providerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_providerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_providerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "active" | "priority" | "identifier" | "availability_rule_id" | "app_id" | "process_url" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Tax_providerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_providerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
