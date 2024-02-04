import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_timeOrderByWithAggregationInput } from "../../../inputs/Delivery_timeOrderByWithAggregationInput";
import { Delivery_timeScalarWhereWithAggregatesInput } from "../../../inputs/Delivery_timeScalarWhereWithAggregatesInput";
import { Delivery_timeWhereInput } from "../../../inputs/Delivery_timeWhereInput";
import { Delivery_timeScalarFieldEnum } from "../../../../enums/Delivery_timeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDelivery_timeArgs {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Delivery_timeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "min" | "max" | "unit" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Delivery_timeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Delivery_timeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
