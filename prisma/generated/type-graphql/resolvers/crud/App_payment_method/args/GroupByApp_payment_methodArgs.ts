import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodOrderByWithAggregationInput } from "../../../inputs/App_payment_methodOrderByWithAggregationInput";
import { App_payment_methodScalarWhereWithAggregatesInput } from "../../../inputs/App_payment_methodScalarWhereWithAggregatesInput";
import { App_payment_methodWhereInput } from "../../../inputs/App_payment_methodWhereInput";
import { App_payment_methodScalarFieldEnum } from "../../../../enums/App_payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  where?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_payment_methodOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "payment_method_id" | "app_name" | "identifier" | "pay_url" | "finalize_url" | "validate_url" | "capture_url" | "refund_url" | "original_media_id" | "created_at" | "updated_at" | "recurring_url">;

  @TypeGraphQL.Field(_type => App_payment_methodScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_payment_methodScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
