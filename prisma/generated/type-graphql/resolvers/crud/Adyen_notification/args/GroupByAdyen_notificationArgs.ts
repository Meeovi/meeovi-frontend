import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationOrderByWithAggregationInput } from "../../../inputs/Adyen_notificationOrderByWithAggregationInput";
import { Adyen_notificationScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_notificationScalarWhereWithAggregatesInput";
import { Adyen_notificationWhereInput } from "../../../inputs/Adyen_notificationWhereInput";
import { Adyen_notificationScalarFieldEnum } from "../../../../enums/Adyen_notificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationWhereInput, {
    nullable: true
  })
  where?: Adyen_notificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_notificationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_notificationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_notificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pspreference" | "original_reference" | "merchant_reference" | "event_code" | "success" | "payment_method" | "amount_value" | "amount_currency" | "reason" | "live" | "additional_data" | "done" | "processing" | "scheduled_processing_time" | "error_count" | "error_message" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Adyen_notificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_notificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
