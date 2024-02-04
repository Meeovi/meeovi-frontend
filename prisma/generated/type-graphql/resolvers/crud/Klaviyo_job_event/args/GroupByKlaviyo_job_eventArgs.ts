import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventOrderByWithAggregationInput } from "../../../inputs/Klaviyo_job_eventOrderByWithAggregationInput";
import { Klaviyo_job_eventScalarWhereWithAggregatesInput } from "../../../inputs/Klaviyo_job_eventScalarWhereWithAggregatesInput";
import { Klaviyo_job_eventWhereInput } from "../../../inputs/Klaviyo_job_eventWhereInput";
import { Klaviyo_job_eventScalarFieldEnum } from "../../../../enums/Klaviyo_job_eventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereInput, {
    nullable: true
  })
  where?: Klaviyo_job_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klaviyo_job_eventOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "entity_id" | "sales_channel_id" | "happened_at" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klaviyo_job_eventScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
