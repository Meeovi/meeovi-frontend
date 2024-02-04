import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationOrderByWithAggregationInput } from "../../../inputs/Tax_provider_translationOrderByWithAggregationInput";
import { Tax_provider_translationScalarWhereWithAggregatesInput } from "../../../inputs/Tax_provider_translationScalarWhereWithAggregatesInput";
import { Tax_provider_translationWhereInput } from "../../../inputs/Tax_provider_translationWhereInput";
import { Tax_provider_translationScalarFieldEnum } from "../../../../enums/Tax_provider_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => Tax_provider_translationWhereInput, {
    nullable: true
  })
  where?: Tax_provider_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Tax_provider_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Tax_provider_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Tax_provider_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"tax_provider_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Tax_provider_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Tax_provider_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
