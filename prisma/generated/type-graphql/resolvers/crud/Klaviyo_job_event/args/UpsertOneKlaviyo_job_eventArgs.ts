import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventCreateInput } from "../../../inputs/Klaviyo_job_eventCreateInput";
import { Klaviyo_job_eventUpdateInput } from "../../../inputs/Klaviyo_job_eventUpdateInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../../../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventCreateInput, {
    nullable: false
  })
  create!: Klaviyo_job_eventCreateInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventUpdateInput, {
    nullable: false
  })
  update!: Klaviyo_job_eventUpdateInput;
}
