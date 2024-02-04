import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logOrderByWithAggregationInput } from "../../../inputs/Klarna_payment_request_logOrderByWithAggregationInput";
import { Klarna_payment_request_logScalarWhereWithAggregatesInput } from "../../../inputs/Klarna_payment_request_logScalarWhereWithAggregatesInput";
import { Klarna_payment_request_logWhereInput } from "../../../inputs/Klarna_payment_request_logWhereInput";
import { Klarna_payment_request_logScalarFieldEnum } from "../../../../enums/Klarna_payment_request_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereInput, {
    nullable: true
  })
  where?: Klarna_payment_request_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klarna_payment_request_logOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "klarna_order_id" | "call_type" | "request" | "response" | "idempotency_key" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klarna_payment_request_logScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klarna_payment_request_logScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
