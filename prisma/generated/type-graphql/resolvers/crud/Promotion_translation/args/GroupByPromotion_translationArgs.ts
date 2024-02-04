import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationOrderByWithAggregationInput } from "../../../inputs/Promotion_translationOrderByWithAggregationInput";
import { Promotion_translationScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_translationScalarWhereWithAggregatesInput";
import { Promotion_translationWhereInput } from "../../../inputs/Promotion_translationWhereInput";
import { Promotion_translationScalarFieldEnum } from "../../../../enums/Promotion_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationWhereInput, {
    nullable: true
  })
  where?: Promotion_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"name" | "promotion_id" | "language_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Promotion_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
