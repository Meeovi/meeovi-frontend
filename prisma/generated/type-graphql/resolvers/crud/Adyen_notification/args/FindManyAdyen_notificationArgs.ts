import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_notificationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_notificationOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_notificationWhereInput } from "../../../inputs/Adyen_notificationWhereInput";
import { Adyen_notificationWhereUniqueInput } from "../../../inputs/Adyen_notificationWhereUniqueInput";
import { Adyen_notificationScalarFieldEnum } from "../../../../enums/Adyen_notificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAdyen_notificationArgs {
  @TypeGraphQL.Field(_type => Adyen_notificationWhereInput, {
    nullable: true
  })
  where?: Adyen_notificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_notificationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_notificationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_notificationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_notificationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Adyen_notificationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "pspreference" | "original_reference" | "merchant_reference" | "event_code" | "success" | "payment_method" | "amount_value" | "amount_currency" | "reason" | "live" | "additional_data" | "done" | "processing" | "scheduled_processing_time" | "error_count" | "error_message" | "created_at" | "updated_at"> | undefined;
}
