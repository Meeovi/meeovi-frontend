import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_job_eventUpdateInput } from "../../../inputs/Klaviyo_job_eventUpdateInput";
import { Klaviyo_job_eventWhereUniqueInput } from "../../../inputs/Klaviyo_job_eventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneKlaviyo_job_eventArgs {
  @TypeGraphQL.Field(_type => Klaviyo_job_eventUpdateInput, {
    nullable: false
  })
  data!: Klaviyo_job_eventUpdateInput;

  @TypeGraphQL.Field(_type => Klaviyo_job_eventWhereUniqueInput, {
    nullable: false
  })
  where!: Klaviyo_job_eventWhereUniqueInput;
}
