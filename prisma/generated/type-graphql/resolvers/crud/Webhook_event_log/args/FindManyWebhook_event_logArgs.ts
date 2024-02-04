import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Webhook_event_logOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Webhook_event_logOrderByWithRelationAndSearchRelevanceInput";
import { Webhook_event_logWhereInput } from "../../../inputs/Webhook_event_logWhereInput";
import { Webhook_event_logWhereUniqueInput } from "../../../inputs/Webhook_event_logWhereUniqueInput";
import { Webhook_event_logScalarFieldEnum } from "../../../../enums/Webhook_event_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyWebhook_event_logArgs {
  @TypeGraphQL.Field(_type => Webhook_event_logWhereInput, {
    nullable: true
  })
  where?: Webhook_event_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Webhook_event_logOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Webhook_event_logOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Webhook_event_logWhereUniqueInput, {
    nullable: true
  })
  cursor?: Webhook_event_logWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Webhook_event_logScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_name" | "webhook_name" | "event_name" | "delivery_status" | "timestamp" | "processing_time" | "app_version" | "request_content" | "response_content" | "response_status_code" | "response_reason_phrase" | "url" | "serialized_webhook_message" | "custom_fields" | "created_at" | "updated_at" | "only_live_version"> | undefined;
}
