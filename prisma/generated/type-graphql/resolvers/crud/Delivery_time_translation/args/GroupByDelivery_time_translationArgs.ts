import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationOrderByWithAggregationInput } from "../../../inputs/Delivery_time_translationOrderByWithAggregationInput";
import { Delivery_time_translationScalarWhereWithAggregatesInput } from "../../../inputs/Delivery_time_translationScalarWhereWithAggregatesInput";
import { Delivery_time_translationWhereInput } from "../../../inputs/Delivery_time_translationWhereInput";
import { Delivery_time_translationScalarFieldEnum } from "../../../../enums/Delivery_time_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  where?: Delivery_time_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Delivery_time_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"delivery_time_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Delivery_time_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Delivery_time_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
