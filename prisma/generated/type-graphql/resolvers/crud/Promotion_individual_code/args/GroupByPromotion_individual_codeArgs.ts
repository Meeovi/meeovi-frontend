import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeOrderByWithAggregationInput } from "../../../inputs/Promotion_individual_codeOrderByWithAggregationInput";
import { Promotion_individual_codeScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_individual_codeScalarWhereWithAggregatesInput";
import { Promotion_individual_codeWhereInput } from "../../../inputs/Promotion_individual_codeWhereInput";
import { Promotion_individual_codeScalarFieldEnum } from "../../../../enums/Promotion_individual_codeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereInput, {
    nullable: true
  })
  where?: Promotion_individual_codeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_individual_codeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_individual_codeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_individual_codeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "promotion_id" | "code" | "payload" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Promotion_individual_codeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_individual_codeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
