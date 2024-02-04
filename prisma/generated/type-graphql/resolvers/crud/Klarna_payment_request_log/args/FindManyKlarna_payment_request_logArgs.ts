import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klarna_payment_request_logOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klarna_payment_request_logOrderByWithRelationAndSearchRelevanceInput";
import { Klarna_payment_request_logWhereInput } from "../../../inputs/Klarna_payment_request_logWhereInput";
import { Klarna_payment_request_logWhereUniqueInput } from "../../../inputs/Klarna_payment_request_logWhereUniqueInput";
import { Klarna_payment_request_logScalarFieldEnum } from "../../../../enums/Klarna_payment_request_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyKlarna_payment_request_logArgs {
  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereInput, {
    nullable: true
  })
  where?: Klarna_payment_request_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klarna_payment_request_logOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klarna_payment_request_logWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klarna_payment_request_logWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klarna_payment_request_logScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "klarna_order_id" | "call_type" | "request" | "response" | "idempotency_key" | "created_at" | "updated_at"> | undefined;
}
