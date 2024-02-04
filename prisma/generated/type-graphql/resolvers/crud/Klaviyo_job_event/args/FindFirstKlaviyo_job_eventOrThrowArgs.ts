import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Klaviyo_job_eventOrderByWithRelationAndSearchRelevanceInput";
import { Klaviyo_job_eventWhereInput } from "../../../inputs/Klaviyo_job_eventWhereInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../../../inputs/Klaviyo_job_eventWhereUniqueInput";
import { Klaviyo_job_eventScalarFieldEnum } from "../../../../enums/Klaviyo_job_eventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstKlaviyo_job_eventOrThrowArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Klaviyo_job_eventOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereUniqueInput, {
    nullable: true
  })
  cursor?: Klaviyo_job_eventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "entity_id" | "sales_channel_id" | "happened_at" | "created_at" | "updated_at"> | undefined;
}
