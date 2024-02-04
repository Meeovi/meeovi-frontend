import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerOrderByWithAggregationInput } from "../../../inputs/Promotion_persona_customerOrderByWithAggregationInput";
import { Promotion_persona_customerScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_persona_customerScalarWhereWithAggregatesInput";
import { Promotion_persona_customerWhereInput } from "../../../inputs/Promotion_persona_customerWhereInput";
import { Promotion_persona_customerScalarFieldEnum } from "../../../../enums/Promotion_persona_customerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_customerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_customerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_persona_customerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_persona_customerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"promotion_id" | "customer_id">;

  @TypeGraphQL.Field(_type => Promotion_persona_customerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_persona_customerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
