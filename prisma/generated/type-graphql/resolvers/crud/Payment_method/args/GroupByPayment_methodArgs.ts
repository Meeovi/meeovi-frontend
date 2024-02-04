import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Payment_methodOrderByWithAggregationInput } from "../../../inputs/Payment_methodOrderByWithAggregationInput";
import { Payment_methodScalarWhereWithAggregatesInput } from "../../../inputs/Payment_methodScalarWhereWithAggregatesInput";
import { Payment_methodWhereInput } from "../../../inputs/Payment_methodWhereInput";
import { Payment_methodScalarFieldEnum } from "../../../../enums/Payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPayment_methodArgs {
  @TypeGraphQL.Field(_type => Payment_methodWhereInput, {
    nullable: true
  })
  where?: Payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Payment_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "handler_identifier" | "position" | "active" | "after_order_enabled" | "availability_rule_id" | "plugin_id" | "media_id" | "created_at" | "updated_at" | "technical_name">;

  @TypeGraphQL.Field(_type => Payment_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Payment_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
